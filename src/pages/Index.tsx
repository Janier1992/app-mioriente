import { useState } from 'react';
import { MessageCircle, Settings, Package, BarChart3 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Components
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { RegistrationSteps } from '@/components/RegistrationSteps';
import { RegistrationForm } from '@/components/RegistrationForm';

// Service Views
import { InventoryView } from '@/components/ServiceViews/InventoryView';
import { AutomationView } from '@/components/ServiceViews/AutomationView';
import { CustomerServiceView } from '@/components/ServiceViews/CustomerServiceView';
import { AdministrationView } from '@/components/ServiceViews/AdministrationView';

type ViewType = 'home' | 'registro' | 'inventario' | 'automatizacion' | 'administracion' | 'atencion';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const { toast } = useToast();

  const services = [
    {
      id: 'atencion',
      title: 'Atención 24/7',
      description: 'Chatbots inteligentes que responden consultas y procesan pedidos automáticamente.',
      icon: <MessageCircle className="h-6 w-6" />,
      variant: 'chat' as const
    },
    {
      id: 'administracion', 
      title: 'Administración',
      description: 'Toma decisiones informadas con análisis de datos y gestión documental inteligente.',
      icon: <BarChart3 className="h-6 w-6" />,
      variant: 'admin' as const
    },
    {
      id: 'automatizacion',
      title: 'Automatización', 
      description: 'Automatiza tareas repetitivas con RPA y control de calidad visual.',
      icon: <Settings className="h-6 w-6" />,
      variant: 'automation' as const
    },
    {
      id: 'inventario',
      title: 'Control de Inventario',
      description: 'Predicción de demanda y gestión eficiente de inventarios en tiempo real.',
      icon: <Package className="h-6 w-6" />,
      variant: 'inventory' as const
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    setCurrentView(serviceId as ViewType);
  };

  const handleVenderClick = () => {
    setCurrentView('registro');
  };

  const handleComprarClick = () => {
    toast({
      title: "Próximamente",
      description: "La funcionalidad de compra estará disponible pronto.",
    });
  };

  const handleRegistrationSubmit = (data: any) => {
    console.log('Registration data:', data);
    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos pronto para activar tu cuenta.",
    });
    setCurrentView('home');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'registro':
        return (
          <RegistrationForm 
            onBack={handleBackToHome}
            onSubmit={handleRegistrationSubmit}
          />
        );
      case 'inventario':
        return <InventoryView onBack={handleBackToHome} />;
      case 'automatizacion':
        return <AutomationView onBack={handleBackToHome} />;
      case 'atencion':
        return <CustomerServiceView onBack={handleBackToHome} />;
      case 'administracion':
        return <AdministrationView onBack={handleBackToHome} />;
      default:
        return (
          <div className="space-y-6 fade-in">
            {/* Hero Section */}
            <HeroSection 
              onVenderClick={handleVenderClick}
              onComprarClick={handleComprarClick}
            />

            {/* Services Section */}
            <section>
              <h3 className="text-lg font-bold text-foreground mb-4">Nuestros Servicios</h3>
              <div className="overflow-x-auto">
                <div className="flex space-x-4 pb-2">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      variant={service.variant}
                      onClick={handleServiceClick}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Registration Steps */}
            <RegistrationSteps onRegisterClick={handleVenderClick} />

            {/* Featured Stores */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-foreground">Tiendas Destacadas</h3>
                <button className="text-primary text-sm hover:underline">Ver todas</button>
              </div>
              <div className="space-y-4">
                {/* Placeholder for stores */}
                <div className="bg-card p-4 rounded-xl shadow-soft border border-border">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                      🥭
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">Finca Los Mangos</h4>
                      <p className="text-sm text-muted-foreground">Frutas tropicales frescas</p>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-500 text-sm">★★★★★</span>
                        <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-4 rounded-xl shadow-soft border border-border">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-3">
                      🍌
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">Plataneros del Oriente</h4>
                      <p className="text-sm text-muted-foreground">Plátanos orgánicos certificados</p>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-500 text-sm">★★★★☆</span>
                        <span className="text-xs text-muted-foreground ml-1">(4.5)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Products */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-foreground">Productos Destacados</h3>
                <button className="text-primary text-sm hover:underline">Ver todos</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden card-interactive">
                  <div className="h-32 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                    <span className="text-4xl">🥭</span>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-foreground">Mango Tommy</h4>
                    <p className="text-sm text-muted-foreground">1 kg</p>
                    <p className="text-primary font-bold mt-1">$8.500</p>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden card-interactive">
                  <div className="h-32 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <span className="text-4xl">🥑</span>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-foreground">Aguacate Hass</h4>
                    <p className="text-sm text-muted-foreground">1 unidad</p>
                    <p className="text-primary font-bold mt-1">$3.200</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 overflow-y-auto px-4 py-4">
        {renderCurrentView()}
      </main>
    </div>
  );
};

export default Index;
