import { Calendar, CheckCircle, Circle, AlertCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const tasks = [
  { id: 1, title: 'Revisar templates novos', completed: false, priority: 'high' },
  { id: 2, title: 'Atualizar página sobre', completed: true, priority: 'medium' },
  { id: 3, title: 'Configurar SEO do blog', completed: false, priority: 'high' },
  { id: 4, title: 'Responder e-mails', completed: false, priority: 'low' },
];

const inboxItems = [
  {
    id: 1,
    type: 'sistema',
    title: 'Nova hospedagem liberada!',
    message: 'Seu site está online com nova hospedagem super rápida!',
    time: '2h atrás',
    priority: 'high'
  },
  {
    id: 2,
    type: 'cliente',
    title: 'Site Publicado!',
    message: 'O site já está online e foi publicado',
    time: '4h atrás',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'equipe',
    title: 'Erro na configuração do CMS',
    message: 'Ops! ocorreu um problema na configuração do CMS. Clique na setinha para consertar.',
    time: '6h atrás',
    priority: 'high'
  }
];

export const RightPanel = () => {
  return (
    <aside className="rightpanel bg-card border-l border-border p-6 overflow-auto">
      <div className="space-y-6">
        {/* Mini Calendar */}
        <div className="card-okan">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">Setembro 2025</h3>
            <Button variant="ghost" size="sm">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-xs">
            {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map(day => (
              <div key={day} className="text-center p-1 text-muted-foreground font-medium">
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }, (_, i) => (
              <button
                key={i + 1}
                className="text-center p-1 hover:bg-accent hover:text-accent-foreground rounded text-sm"
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="card-okan">
          <h3 className="font-semibold mb-4 flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            Próximas Tarefas
          </h3>
          <div className="space-y-3">
            {tasks.slice(0, 4).map(task => (
              <div key={task.id} className="flex items-start space-x-3">
                <button className="mt-1">
                  {task.completed ? (
                    <CheckCircle className="h-4 w-4 text-success" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {task.title}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge
                      variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {task.priority === 'high' ? 'urgente' : task.priority === 'medium' ? 'importante' : 'normal'}
                    </Badge>
                    <Avatar className="h-4 w-4">
                      <AvatarFallback className="text-xs">N</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inbox */}
        <div className="card-okan">
          <h3 className="font-semibold mb-4">Meu Inbox</h3>
          <Tabs defaultValue="sistema" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sistema" className="text-xs">Sistema</TabsTrigger>
              <TabsTrigger value="clientes" className="text-xs">Clientes</TabsTrigger>
              <TabsTrigger value="equipe" className="text-xs">Equipe</TabsTrigger>
            </TabsList>
            <TabsContent value="sistema" className="space-y-3 mt-4">
              {inboxItems.filter(item => item.type === 'sistema').map(item => (
                <div key={item.id} className="p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.message}</p>
                    </div>
                    {item.priority === 'high' && (
                      <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{item.time}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="clientes" className="space-y-3 mt-4">
              {inboxItems.filter(item => item.type === 'cliente').map(item => (
                <div key={item.id} className="p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.message}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{item.time}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="equipe" className="space-y-3 mt-4">
              {inboxItems.filter(item => item.type === 'equipe').map(item => (
                <div key={item.id} className="p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.message}</p>
                    </div>
                    {item.priority === 'high' && (
                      <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{item.time}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
          
          <Button variant="outline" className="w-full mt-4" size="sm">
            Ver Inbox
          </Button>
        </div>
      </div>
    </aside>
  );
};