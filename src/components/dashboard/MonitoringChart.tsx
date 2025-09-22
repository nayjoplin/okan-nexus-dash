import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot } from 'lucide-react';

const lineData = [
  { name: '1', visitors: 400, conversions: 240, bounce: 180 },
  { name: '2', visitors: 300, conversions: 139, bounce: 220 },
  { name: '3', visitors: 200, conversions: 980, bounce: 290 },
  { name: '4', visitors: 278, conversions: 390, bounce: 200 },
  { name: '5', visitors: 189, conversions: 480, bounce: 181 },
  { name: '6', visitors: 239, conversions: 380, bounce: 250 },
  { name: '7', visitors: 349, conversions: 430, bounce: 210 },
];

const trafficSources = [
  { name: 'Pesquisa Orgânica', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Redes Sociais', value: 25, color: 'hsl(var(--secondary))' },
  { name: 'Direto', value: 20, color: 'hsl(var(--accent))' },
  { name: 'Referência', value: 10, color: 'hsl(var(--muted))' },
];

const topPages = [
  { page: 'Home Page', visits: 1247, percentage: 35 },
  { page: 'Sobre Nós', visits: 856, percentage: 24 },
  { page: 'Contato', visits: 623, percentage: 18 },
];

export const MonitoringChart = () => {
  const [selectedSite, setSelectedSite] = useState('all');
  const [chartType, setChartType] = useState('line');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Monitoramento Avançado</h3>
        <Button variant="outline" size="sm">
          <Bot className="h-4 w-4 mr-2" />
          Analisar com IA
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <Select defaultValue="traffic">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Métrica" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="traffic">Tráfego</SelectItem>
            <SelectItem value="conversions">Conversões</SelectItem>
            <SelectItem value="bounce">Taxa de Rejeição</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="7days">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Últimos 7 dias</SelectItem>
            <SelectItem value="30days">Últimos 30 dias</SelectItem>
            <SelectItem value="90days">Últimos 90 dias</SelectItem>
          </SelectContent>
        </Select>

        <Select value={chartType} onValueChange={setChartType}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Visualização" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="line">Linha</SelectItem>
            <SelectItem value="bar">Barras</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Chart Area */}
      <div className="card-okan">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-medium">Visitas totais nos últimos 03 dias</h4>
          <Tabs value={selectedSite} onValueChange={setSelectedSite}>
            <TabsList>
              <TabsTrigger value="site1" className="text-xs">Site 01</TabsTrigger>
              <TabsTrigger value="site2" className="text-xs">Site 02</TabsTrigger>
              <TabsTrigger value="all" className="text-xs">Todos</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'line' ? (
              <LineChart 
                data={lineData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--popover-foreground))'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="conversions" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="bounce" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            ) : (
              <BarChart 
                data={lineData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--popover-foreground))'
                  }} 
                />
                <Bar dataKey="visitors" fill="hsl(var(--primary))" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="card-okan">
          <h4 className="font-medium mb-4">Origem dos visitantes</h4>
          <div className="space-y-3">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }}></div>
                  <span className="text-sm">{source.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ width: `${source.value * 2}%`, backgroundColor: source.color }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium w-8">{source.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="card-okan">
          <h4 className="font-medium mb-4">Páginas mais visitadas</h4>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{String(index + 1).padStart(2, '0')}. {page.page}</div>
                  <div className="text-xs text-muted-foreground">{page.visits} visitantes</div>
                </div>
                <div className="text-sm font-medium">{page.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};