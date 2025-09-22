import { TrendingUp, TrendingDown, Users, Clock, MousePointer } from 'lucide-react';

const kpis = [
  {
    label: 'Tráfego semanal',
    value: '594',
    change: '+12%',
    trend: 'up',
    icon: Users,
  },
  {
    label: 'Conversões recentes',
    value: '125',
    change: '+8%',
    trend: 'up',
    icon: MousePointer,
  },
  {
    label: 'Tempo médio',
    value: '2:34',
    change: '-5%',
    trend: 'down',
    icon: Clock,
  },
  {
    label: 'Páginas mais vistas',
    value: '1,247',
    change: '+15%',
    trend: 'up',
    icon: TrendingUp,
  },
];

export const KPICards = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Insights de Performance</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="card-kpi">
            <div className="flex items-center justify-between">
              <kpi.icon className="h-6 w-6 text-muted-foreground" />
              <div className={`flex items-center text-sm ${
                kpi.trend === 'up' ? 'text-success' : 'text-destructive'
              }`}>
                {kpi.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                {kpi.change}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-foreground">{kpi.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{kpi.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};