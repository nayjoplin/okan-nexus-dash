import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { RightPanel } from './RightPanel';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Debug: Log layout state
  console.log('DashboardLayout rendered:', { sidebarCollapsed });

  return (
    <div className={`dashboard-layout ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <Header />
      <main className="main p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      <RightPanel />
    </div>
  );
};