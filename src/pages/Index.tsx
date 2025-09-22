import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { WelcomeHero } from '@/components/dashboard/WelcomeHero';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { KPICards } from '@/components/dashboard/KPICards';
import { MonitoringChart } from '@/components/dashboard/MonitoringChart';
import { SiteCards } from '@/components/dashboard/SiteCards';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <WelcomeHero />
        <QuickActions />
        <KPICards />
        <MonitoringChart />
        <SiteCards />
      </div>
    </DashboardLayout>
  );
};

export default Index;
