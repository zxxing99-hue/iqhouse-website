import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

interface ImageCropEditorProps {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  onCropComplete: (croppedImage: string) => void;
  aspectRatio?: number; // 宽高比，默认 1200:630 = 1.9
}

export function ImageCropEditor({
  open,
  onClose,
  imageSrc,
  onCropComplete,
  aspectRatio = 1200 / 630,
}: ImageCropEditorProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const onCropAreaChange = useCallback(
    (_croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleCropConfirm = useCallback(async () => {
    if (!croppedAreaPixels) return;

    try {
      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        const pixels = croppedAreaPixels as any;
        canvas.width = pixels.width;
        canvas.height = pixels.height;

        ctx.drawImage(
          image,
          pixels.x,
          pixels.y,
          pixels.width,
          pixels.height,
          0,
          0,
          pixels.width,
          pixels.height
        );

        const croppedImage = canvas.toDataURL('image/jpeg', 0.95);
        onCropComplete(croppedImage);
        onClose();
      };
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  }, [croppedAreaPixels, imageSrc, onCropComplete, onClose]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>裁剪图片</DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            推荐尺寸: 1200x630 像素 (宽高比 1.9:1)
          </p>
        </DialogHeader>

        <div className="space-y-4">
          {/* 裁剪区域 */}
          <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden" style={{ height: '400px' }}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={aspectRatio}
              onCropChange={setCrop}
              onCropAreaChange={onCropAreaChange}
              onZoomChange={setZoom}
              cropShape="rect"
              showGrid={true}
            />
          </div>

          {/* 缩放控制 */}
          <div className="space-y-2">
            <Label>缩放: {zoom.toFixed(2)}x</Label>
            <Slider
              value={[zoom]}
              onValueChange={(value) => setZoom(value[0])}
              min={1}
              max={3}
              step={0.1}
              className="w-full"
            />
          </div>

          {/* 尺寸信息 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
            <p className="font-semibold text-blue-900">📐 尺寸信息</p>
            <p className="text-blue-800 mt-1">
              推荐尺寸: <strong>1200 × 630 像素</strong>
            </p>
            <p className="text-blue-700 text-xs mt-2">
              ℹ️ 这个尺寸适合大多数社交媒体和博客平台的分享卡片显示
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            取消
          </Button>
          <Button type="button" onClick={handleCropConfirm}>
            确认裁剪
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
