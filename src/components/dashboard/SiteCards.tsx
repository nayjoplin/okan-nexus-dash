import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ExternalLink, Edit, Database, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const sites = [
  {
    id: 1,
    name: 'Loja Okeren',
    description: 'centro de templates',
    status: 'active',
    progress: 95,
    image: '/placeholder-site.jpg'
  },
  {
    id: 2,
    name: 'Loja Okeren',
    description: 'centro de templates',
    status: 'production',
    progress: 75,
    image: '/placeholder-site.jpg'
  },
  {
    id: 3,
    name: 'Loja Okeren',
    description: 'centro de templates',
    status: 'inactive',
    progress: 15,
    image: '/placeholder-site.jpg'
  },
  {
    id: 4,
    name: 'Projeto Alpha',
    description: 'site corporativo',
    status: 'active',
    progress: 100,
    image: '/placeholder-site.jpg'
  },
];

const getStatusInfo = (status: string) => {
  switch (status) {
    case 'active':
      return { label: 'Ativo', variant: 'default' as const, color: 'bg-success' };
    case 'production':
      return { label: 'Em Produção', variant: 'secondary' as const, color: 'bg-warning' };
    case 'inactive':
      return { label: 'Inativo', variant: 'outline' as const, color: 'bg-destructive' };
    default:
      return { label: 'Desconhecido', variant: 'outline' as const, color: 'bg-muted' };
  }
};

export const SiteCards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sitesPerPage = 2;
  const totalPages = Math.ceil(sites.length / sitesPerPage);
  
  const currentSites = sites.slice(
    currentPage * sitesPerPage,
    (currentPage + 1) * sitesPerPage
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Meus Sites</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            {currentPage + 1} / {totalPages}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentSites.map((site) => {
          const statusInfo = getStatusInfo(site.status);
          
          return (
            <div key={site.id} className="card-site">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">{site.name}</h4>
                    <p className="text-sm text-muted-foreground">{site.description}</p>
                  </div>
                  <Badge variant={statusInfo.variant} className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${statusInfo.color}`}></div>
                    <span>{statusInfo.label}</span>
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Progresso do site</span>
                    <span className="text-sm text-muted-foreground">{site.progress}%</span>
                  </div>
                  <Progress value={site.progress} className="h-2" />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver online
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-2" />
                  Editar site
                </Button>
                <Button variant="outline" size="sm">
                  <Database className="h-4 w-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};