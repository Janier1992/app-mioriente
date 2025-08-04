import { ArrowLeft, Settings, CheckCircle, Clock, BarChart3 } from 'lucide-react';

interface AutomationViewProps {
  onBack: () => void;
}

export const AutomationView = ({ onBack }: AutomationViewProps) => {
  const automatedProcesses = [
    { name: 'Facturación automática', status: 'active', icon: CheckCircle },
    { name: 'Gestión de pedidos', status: 'active', icon: CheckCircle },
    { name: 'Control de calidad', status: 'pending', icon: Clock },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-3 touch-target">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h2 className="text-xl font-bold text-foreground">Automatización de Procesos</h2>
      </div>
      
      <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Settings className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Automatización Inteligente</h3>
          <p className="text-sm text-muted-foreground">Automatiza tareas repetitivas y mejora la eficiencia de tu negocio.</p>
        </div>
        
        <div className="space-y-4">
          {/* Procesos Automatizados */}
          <div className="p-4 border border-border rounded-xl">
            <h4 className="font-bold text-foreground mb-3 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-orange-600" />
              Procesos Automatizados
            </h4>
            <div className="space-y-2">
              {automatedProcesses.map((process, index) => {
                const IconComponent = process.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center">
                      <IconComponent 
                        className={`h-5 w-5 mr-3 ${
                          process.status === 'active' ? 'text-green-500' : 'text-gray-400'
                        }`} 
                      />
                      <span className="text-sm font-medium text-foreground">{process.name}</span>
                    </div>
                    <span 
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        process.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {process.status === 'active' ? 'Activo' : 'Pendiente'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Estadísticas */}
          <div className="p-4 border border-border rounded-xl">
            <h4 className="font-bold text-foreground mb-3 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
              Estadísticas
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-blue-800">Tareas automatizadas</div>
              </div>
              <div className="text-center p-4 bg-green-50 border border-green-100 rounded-lg">
                <div className="text-2xl font-bold text-green-600">40%</div>
                <div className="text-sm text-green-800">Ahorro de tiempo</div>
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div className="p-4 border border-border rounded-xl">
            <h4 className="font-bold text-foreground mb-3">Beneficios de la Automatización</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Reducción de errores humanos
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Mayor eficiencia operativa
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Disponibilidad 24/7
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Escalabilidad automática
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};