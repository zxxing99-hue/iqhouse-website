import WebSocket from 'ws';
import crypto from 'crypto';

const XUNFEI_API_KEY = process.env.XUNFEI_API_KEY || 'cb6b61377383f30d4ffec2a8de754063';
const XUNFEI_API_SECRET = process.env.XUNFEI_API_SECRET || 'MGRhZmVkZjdjYzkzZmM5M2Y0ZTkzZGMy';
const XUNFEI_ASSISTANT_ID = 'k81niq6r2sg4_v1';
const XUNFEI_WS_URL = 'wss://spark-openapi.cn-huabei-1.xf-yun.com/v1/assistants/k81niq6r2sg4_v1';

interface XunfeiMessage {
  header: {
    app_id: string;
    uid: string;
  };
  parameter: {
    chat: {
      domain: string;
      temperature: number;
    };
  };
  payload: {
    message: {
      text: Array<{
        role: string;
        content: string;
      }>;
    };
  };
}

export class XunfeiProxy {
  private ws: WebSocket | null = null;
  private messageQueue: string[] = [];
  private isConnected = false;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 3;

  constructor(private onMessage: (data: string) => void, private onError: (error: Error) => void) {}

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        // Generate auth header
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const signatureRaw = `host=spark-openapi.cn-huabei-1.xf-yun.com&date=${timestamp}&GET /v1/assistants/${XUNFEI_ASSISTANT_ID} HTTP/1.1&authorization=api_key="${XUNFEI_API_KEY}"`;
        
        const signature = crypto
          .createHmac('sha256', XUNFEI_API_SECRET)
          .update(signatureRaw)
          .digest('base64');

        const authorizationHeader = `api_key="${XUNFEI_API_KEY}", algorithm="hmac-sha256", headers="host date request-line authorization", signature="${signature}"`;
        const authBase64 = Buffer.from(authorizationHeader).toString('base64');

        // Connect to Xunfei WebSocket
        this.ws = new WebSocket(XUNFEI_WS_URL, {
          headers: {
            'Authorization': authBase64,
            'Date': new Date(parseInt(timestamp) * 1000).toUTCString(),
          },
        });

        this.ws.onopen = () => {
          console.log('Connected to Xunfei API');
          this.isConnected = true;
          this.reconnectAttempts = 0;
          this.processQueue();
          resolve();
        };

        this.ws.onmessage = (event: WebSocket.MessageEvent) => {
          try {
            const data = JSON.parse(event.data as string);
            this.onMessage(JSON.stringify(data));
          } catch (error) {
            console.error('Error parsing Xunfei response:', error);
          }
        };

        this.ws.onerror = (error: any) => {
          console.error('Xunfei WebSocket error:', error);
          this.isConnected = false;
          this.onError(new Error('Connection error'));
          reject(error);
        };

        this.ws.onclose = () => {
          console.log('Disconnected from Xunfei API');
          this.isConnected = false;
          this.attemptReconnect();
        };

        // Timeout after 10 seconds
        setTimeout(() => {
          if (!this.isConnected) {
            reject(new Error('Connection timeout'));
          }
        }, 10000);
      } catch (error) {
        reject(error);
      }
    });
  }

  private attemptReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = Math.pow(2, this.reconnectAttempts) * 1000; // Exponential backoff
      console.log(`Attempting to reconnect in ${delay}ms...`);
      setTimeout(() => {
        this.connect().catch(error => {
          console.error('Reconnection failed:', error);
        });
      }, delay);
    }
  }

  private processQueue(): void {
    while (this.messageQueue.length > 0 && this.isConnected && this.ws?.readyState === WebSocket.OPEN) {
      const message = this.messageQueue.shift();
      if (message) {
        this.ws.send(message);
      }
    }
  }

  sendMessage(message: XunfeiMessage): void {
    const messageStr = JSON.stringify(message);
    
    if (this.isConnected && this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(messageStr);
    } else {
      // Queue message if not connected
      this.messageQueue.push(messageStr);
      if (!this.isConnected) {
        this.connect().catch(error => {
          console.error('Failed to connect:', error);
          this.onError(error);
        });
      }
    }
  }

  close(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.isConnected = false;
  }

  isReady(): boolean {
    return this.isConnected && this.ws?.readyState === WebSocket.OPEN;
  }
}

// Global proxy instance
let globalProxy: XunfeiProxy | null = null;

export function getXunfeiProxy(
  onMessage: (data: string) => void,
  onError: (error: Error) => void
): XunfeiProxy {
  if (!globalProxy) {
    globalProxy = new XunfeiProxy(onMessage, onError);
  }
  return globalProxy;
}

export function closeXunfeiProxy(): void {
  if (globalProxy) {
    globalProxy.close();
    globalProxy = null;
  }
}
