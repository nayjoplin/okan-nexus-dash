import { Plus, Layers, CheckSquare, BarChart3, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const actions = [
  { icon: Plus, label: 'Criar Novo Site', variant: 'default' as const },
  { icon: Layers, label: 'Templates Premium', variant: 'secondary' as const },
  { icon: CheckSquare, label: 'Minhas Tarefas', variant: 'outline' as const },
  { icon: BarChart3, label: 'Relatório do Site', variant: 'outline' as const },
  { icon: Mail, label: 'Ver e-mail', variant: 'outline' as const },
];

export const QuickActions = () => {
  return (
    <div className="card-okan">
      <h3 className="font-semibold mb-6">Ações Rápidas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className="flex flex-col items-center justify-center h-20 space-y-2"
          >
            <action.icon className="h-5 w-5" />
            <span className="text-xs font-medium text-center leading-tight">
              {action.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};