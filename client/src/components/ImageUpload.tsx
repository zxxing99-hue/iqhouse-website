import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Link as LinkIcon, X, Crop } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { ImageCropEditor } from '@/components/ImageCropEditor';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImageUpload({ value, onChange, label }: ImageUploadProps) {
  const [urlInput, setUrlInput] = useState(value);
  const [uploading, setUploading] = useState(false);
  const [tempImage, setTempImage] = useState<string>('');
  const [showCropEditor, setShowCropEditor] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const uploadMutation = trpc.upload.uploadImage.useMutation({
    onSuccess: (data) => {
      onChange(data.url);
      toast.success('图片上传成功');
      setUploading(false);
    },
    onError: (error) => {
      toast.error(`上传失败: ${error.message}`);
      setUploading(false);
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('请选择图片文件');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('图片大小不能超过5MB');
      return;
    }

    // Convert file to base64 for cropping
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result as string;
      setTempImage(base64Image);
      setShowCropEditor(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = async (croppedImage: string) => {
    setUploading(true);
    
    // Convert cropped image to blob and upload
    const base64Data = croppedImage.split(',')[1];
    
    await uploadMutation.mutateAsync({
      filename: 'blog-cover.jpg',
      contentType: 'image/jpeg',
      base64Data,
    });
  };

  const handleUrlSubmit = () => {
    onChange(urlInput);
    toast.success('图片URL已更新');
  };

  const handleClear = () => {
    onChange('');
    setUrlInput('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">上传文件</TabsTrigger>
          <TabsTrigger value="url">输入URL</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={uploading}
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              <Upload className="w-4 h-4" />
            </Button>
          </div>
          {uploading && (
            <p className="text-sm text-muted-foreground">上传中...</p>
          )}
          <p className="text-xs text-muted-foreground">
            💡 上传后可以在裁剪编辑器中调整显示区域
          </p>
        </TabsContent>
        
        <TabsContent value="url" className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleUrlSubmit}
            >
              <LinkIcon className="w-4 h-4" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {value && (
        <div className="space-y-3">
          <div className="relative">
            <img
              src={value}
              alt="Preview"
              className="w-full max-w-md h-48 object-cover rounded-lg border"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => {
                  setTempImage(value);
                  setShowCropEditor(true);
                }}
                title="重新裁剪"
              >
                <Crop className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={handleClear}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            📐 推荐尺寸: 1200 × 630 像素 (用于社交媒体分享卡片)
          </p>
        </div>
      )}

      <ImageCropEditor
        open={showCropEditor}
        onClose={() => setShowCropEditor(false)}
        imageSrc={tempImage}
        onCropComplete={handleCropComplete}
        aspectRatio={1200 / 630}
      />
    </div>
  );
}
