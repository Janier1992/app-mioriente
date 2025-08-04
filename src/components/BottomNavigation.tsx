import { Home, Store, MapPin, MoreHorizontal } from 'lucide-react';

type BottomNavType = 'inicio' | 'tiendas' | 'turismo' | 'mas';

interface BottomNavigationProps {
  activeTab: BottomNavType;
  onTabChange: (tab: BottomNavType) => void;
}

export const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const navItems = [
    { id: 'inicio' as BottomNavType, label: 'Inicio', icon: Home },
    { id: 'tiendas' as BottomNavType, label: 'Tiendas', icon: Store },
    { id: 'turismo' as BottomNavType, label: 'Turismo', icon: MapPin },
    { id: 'mas' as BottomNavType, label: 'Más', icon: MoreHorizontal },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-card z-50">
      <div className="max-w-sm mx-auto">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`
                  flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }
                `}
              >
                <IconComponent 
                  className={`h-5 w-5 mb-1 ${isActive ? 'text-primary' : ''}`} 
                />
                <span className={`text-xs font-medium ${isActive ? 'text-primary' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};