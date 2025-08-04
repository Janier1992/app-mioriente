import { Settings, Users, FileText, Bell, Shield, HelpCircle, Phone, Star, ChevronRight } from 'lucide-react';

interface MoreViewProps {
  onBack: () => void;
}

export const MoreView = ({ onBack }: MoreViewProps) => {
  const menuSections = [
    {
      title: 'Mi Cuenta',
      items: [
        { id: 'profile', label: 'Perfil', icon: Users, badge: null },
        { id: 'orders', label: 'Mis Pedidos', icon: FileText, badge: '3' },
        { id: 'notifications', label: 'Notificaciones', icon: Bell, badge: null },
      ]
    },
    {
      title: 'Configuración',
      items: [
        { id: 'settings', label: 'Configuración', icon: Settings, badge: null },
        { id: 'privacy', label: 'Privacidad', icon: Shield, badge: null },
      ]
    },
    {
      title: 'Soporte',
      items: [
        { id: 'help', label: 'Centro de Ayuda', icon: HelpCircle, badge: null },
        { id: 'contact', label: 'Contacto', icon: Phone, badge: null },
        { id: 'rate', label: 'Calificar App', icon: Star, badge: null },
      ]
    }
  ];

  const stats = [
    { label: 'Pedidos realizados', value: '12' },
    { label: 'Tiendas favoritas', value: '5' },
    { label: 'Puntos acumulados', value: '1,250' },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* User Profile Header */}
      <div className="bg-gradient-oriente text-white rounded-xl p-6">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold">Usuario Invitado</h3>
            <p className="text-white/80 text-sm">Inicia sesión para acceder a más funciones</p>
            <button className="mt-2 bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-card rounded-xl shadow-soft border border-border p-4">
        <h4 className="font-bold text-foreground mb-3">Estadísticas</h4>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="text-xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="space-y-4">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h4 className="font-bold text-foreground">{section.title}</h4>
            </div>
            <div className="divide-y divide-border">
              {section.items.map((item, itemIndex) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="h-5 w-5 text-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                    <div className="flex items-center">
                      {item.badge && (
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mr-2">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* App Info */}
      <div className="bg-card rounded-xl shadow-soft border border-border p-4">
        <h4 className="font-bold text-foreground mb-3">Información de la App</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Versión</span>
            <span className="font-medium">1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span>Última actualización</span>
            <span className="font-medium">Dic 2024</span>
          </div>
          <div className="flex justify-between">
            <span>Desarrollado por</span>
            <span className="font-medium">Oriente Connect</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl shadow-soft border border-border p-4">
        <h4 className="font-bold text-foreground mb-3">Acciones Rápidas</h4>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-3 bg-green-50 border border-green-200 rounded-lg text-center hover:bg-green-100 transition-colors">
            <div className="text-green-600 font-semibold text-sm">Convertirse en Vendedor</div>
          </button>
          <button className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center hover:bg-blue-100 transition-colors">
            <div className="text-blue-600 font-semibold text-sm">Invitar Amigos</div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-4">
        <p className="text-xs text-muted-foreground">
          © 2024 Servicios A mi Oriente. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};