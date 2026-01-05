import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trpc } from '@/lib/trpc';
import './AIChatSidebar.css';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const PRESET_QUESTIONS = [
  "Do you offer OEM or ODM cooperation?",
  "I am a toy brand. How can we work with IQHouse?",
  "Do you support design collaboration for educational toys?",
  "What types of partners do you usually work with?",
  "What is your toy design methodology?",
  "How are your toys developed from real classroom observation?",
  "What learning capabilities do your toys focus on?",
];

export function AIChatSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Initialize connection when chat opens
  useEffect(() => {
    if (!isOpen) return;

    const initializeConnection = async () => {
      try {
        console.log('Initializing AI chat connection...');
        // Connection will be established when first message is sent
      } catch (error) {
        console.error('Error initializing connection:', error);
      }
    };

    initializeConnection();

    return () => {
      // Cleanup
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [isOpen, sessionId]);

  // Use trpc mutation for sending messages
  const sendMessageMutation = trpc.ai.sendMessage.useMutation();

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      type: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send message through backend
      const result = await sendMessageMutation.mutateAsync({
        sessionId,
        message: text,
      });

      console.log('Message sent:', result);

      // Simulate AI response (in production, you'd receive this from WebSocket or SSE)
      // For now, add a placeholder response
      setTimeout(() => {
        const assistantMessage: Message = {
          id: `msg-${Date.now()}`,
          type: 'assistant',
          content: 'Thank you for your question. Our team will review your inquiry and get back to you shortly.',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: `msg-${Date.now()}`,
        type: 'assistant',
        content: 'Sorry, there was an error processing your message. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-6 right-6 z-40 rounded-full p-4 shadow-lg transition-all duration-300',
          'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
          'text-white flex items-center justify-center',
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100',
          'breathing-animation'
        )}
        title="AI Chat Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Sidebar */}
      <div
        className={cn(
          'fixed bottom-0 right-0 top-0 z-50 w-full sm:w-96 bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <div>
              <h3 className="font-semibold">IQHouse AI Assistant</h3>
              <p className="text-xs text-blue-100">在线</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 p-1 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-300 mb-4" />
              <p className="text-gray-600 font-medium mb-4">是否需要帮助？</p>
              <p className="text-sm text-gray-500 mb-6">
                点击下方快速问题或直接输入您的问题
              </p>
              <div className="space-y-2 w-full">
                {PRESET_QUESTIONS.slice(0, 3).map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(question)}
                    className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-sm text-gray-700 transition-colors text-xs"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={cn(
                    'flex gap-3',
                    msg.type === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-xs px-4 py-2 rounded-lg',
                      msg.type === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-900 rounded-bl-none'
                    )}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          )}
        </ScrollArea>

        {/* Preset Questions (when chat is active) */}
        {messages.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-200 max-h-24 overflow-y-auto">
            <p className="text-xs text-gray-600 mb-2 font-medium">快速问题：</p>
            <div className="space-y-2">
              {PRESET_QUESTIONS.slice(0, 2).map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(question)}
                  disabled={isLoading}
                  className="w-full text-left p-2 rounded text-xs bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4 space-y-3">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }
              }}
              placeholder="输入您的问题..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={isLoading || !inputValue.trim()}
              size="icon"
              className="bg-blue-500 hover:bg-blue-600"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          {messages.length === 0 && (
            <div className="space-y-2">
              {PRESET_QUESTIONS.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(question)}
                  className="w-full text-left p-2 rounded text-xs bg-blue-50 hover:bg-blue-100 text-gray-700 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
