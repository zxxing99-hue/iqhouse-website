import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  LayoutDashboard, 
  FileText, 
  Package, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { trpc } from '@/lib/trpc';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [location, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const logoutMutation = trpc.auth.logout.useMutation();

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    setLocation('/');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: '控制台', href: '/admin' },
    { icon: FileText, label: '博客文章', href: '/admin/blog' },
    { icon: Package, label: '产品管理', href: '/admin/products' },
  ];

  const SidebarContent = () => (
    <>
      <div className="p-6">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <h2 className="text-xl font-bold">管理后台</h2>
          </div>
        </Link>
      </div>
      
      <Separator />
      
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? 'secondary' : 'ghost'}
                  className="w-full justify-start gap-3"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      
      <div className="p-3">
        <Separator className="mb-3" />
        <Button
          variant="ghost"
          className="w-full justify-start gap-3"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          退出登录
        </Button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background border-b z-50 flex items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
        <span className="ml-4 font-bold">管理后台</span>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 bottom-0 w-64 bg-card border-r z-50
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <SidebarContent />
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        <main className="pt-16 lg:pt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
