import { 
  LayoutDashboard, 
  CheckSquare, 
  Mail, 
  Globe, 
  Layers, 
  Database,
  FileText,
  Image,
  PenTool,
  Search,
  BarChart3,
  Bell,
  Users,
  Settings,
  UserCircle,
  HelpCircle,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: CheckSquare, label: 'Minhas Tarefas' },
  { icon: Mail, label: 'Meu E-mail' },
  { icon: Globe, label: 'Sites' },
  { icon: Layers, label: 'Templates' },
  { icon: Database, label: 'CMS Okan' },
  { icon: FileText, label: 'Páginas & Coleções' },
  { icon: Image, label: 'Biblioteca de Mídia' },
  { icon: PenTool, label: 'Blog & Posts' },
  { icon: Search, label: 'SEO Avançado' },
  { icon: BarChart3, label: 'Métricas' },
  { icon: Bell, label: 'Notificações' },
  { icon: Users, label: 'Equipe & Permissões' },
  { icon: Settings, label: 'Configurações' },
  { icon: UserCircle, label: 'Minha Área Logada' },
  { icon: HelpCircle, label: 'Suporte' },
];

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <aside className="sidebar bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl text-sidebar-foreground">Okan</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              item.active 
                ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                : "text-sidebar-foreground",
              collapsed && "justify-center"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};