import { useState } from 'react';
import { Home, Menu, UserPlus, Package, Settings, BarChart, MessageCircle } from 'lucide-react';

type ViewType = 'home' | 'registro' | 'inventario' | 'automatizacion' | 'administracion' | 'atencion';

interface HeaderProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export const Header = ({ currentView, onViewChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { id: ViewType; label: string; icon: any }[] = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'registro', label: 'Registro de Tiendas', icon: UserPlus },
    { id: 'inventario', label: 'Control de Inventarios', icon: Package },
    { id: 'automatizacion', label: 'Automatización de Procesos', icon: Settings },
    { id: 'administracion', label: 'Administración de Negocios', icon: BarChart },
    { id: 'atencion', label: 'Atención al Cliente', icon: MessageCircle },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (viewId: ViewType) => {
    onViewChange(viewId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-card shadow-soft px-4 py-3 relative z-50 border-b border-border">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="gradient-oriente text-white p-2 rounded-lg mr-3">
            <Home className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Servicios A mi Oriente</h1>
          </div>
        </div>
        <button 
          onClick={handleMenuToggle}
          className="text-foreground hover:text-primary transition-colors touch-target"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        {/* Menu Dropdown */}
        <div className={`
          absolute top-full right-4 mt-2 bg-card rounded-xl shadow-card min-w-[240px] 
          transition-all duration-300 origin-top-right border border-border
          ${isMenuOpen 
            ? 'opacity-100 visible transform scale-100' 
            : 'opacity-0 invisible transform scale-95'
          }
        `}>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`
                  w-full flex items-center px-4 py-3 text-left transition-colors
                  hover:bg-muted first:rounded-t-xl last:rounded-b-xl
                  ${currentView === item.id ? 'bg-primary/10 text-primary' : 'text-foreground'}
                  ${index < menuItems.length - 1 ? 'border-b border-border' : ''}
                `}
              >
                <IconComponent className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};