import { Sparkles, AlertTriangle, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const WelcomeHero = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Olá, Nay! 
        </h1>
        <p className="text-lg text-muted-foreground flex items-center">
          Vamos construir algo incrível hoje <Sparkles className="ml-2 h-5 w-5 text-accent" />
        </p>
      </div>

      {/* Progress Section */}
      <div className="card-okan">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Configuração do Projeto</h3>
          <span className="text-sm text-muted-foreground">85% completo</span>
        </div>
        <Progress value={85} className="mb-4" />
        <p className="text-sm text-muted-foreground">
          Faltam apenas alguns passos para finalizar sua configuração
        </p>
      </div>

      {/* Alert Section */}
      <Alert className="border-warning bg-warning/10">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <AlertDescription className="flex items-center justify-between">
          <span>A sua retenção pode estar sendo prejudicada</span>
          <Button size="sm" variant="outline" className="ml-4">
            <Zap className="h-4 w-4 mr-2" />
            Corrigir com IA
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
};