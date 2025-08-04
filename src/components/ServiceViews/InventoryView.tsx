import { ArrowLeft, Package, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

interface InventoryViewProps {
  onBack: () => void;
}

export const InventoryView = ({ onBack }: InventoryViewProps) => {
  const stockData = [
    { name: 'Plátano Orgánico', quantity: '120 kg', status: 'good', color: 'text-green-600' },
    { name: 'Mango Tommy', quantity: '85 kg', status: 'good', color: 'text-green-600' },
    { name: 'Aguacate Hass', quantity: '15 unidades', status: 'low', color: 'text-red-600' },
  ];

  const recommendations = [
    { text: 'Reabastecer Aguacate Hass', type: 'warning', icon: AlertTriangle },
    { text: 'Nivel óptimo: Plátano y Mango', type: 'success', icon: CheckCircle },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-3 touch-target">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h2 className="text-xl font-bold text-foreground">Control de Inventarios</h2>
      </div>
      
      <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Gestión de Inventarios</h3>
          <p className="text-sm text-muted-foreground">Optimiza tus niveles de stock con predicción de demanda y análisis inteligente.</p>
        </div>
        
        <div className="space-y-4">
          {/* Predicción de Demanda */}
          <div className="p-4 border border-border rounded-xl">
            <h4 className="font-bold text-foreground mb-2 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Predicción de Demanda
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Nuestra IA analiza patrones históricos y estacionales para predecir la demanda de tus productos.
            </p>
            <div className="w-full bg-muted rounded-full h-3 mb-2">
              <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: '75%' }} />
            </div>
            <p className="text-xs text-muted-foreground">Precisión: 75%</p>
          </div>
          
          {/* Niveles de Stock */}
          <div className="p-4 border border-border rounded-xl">
            <h4 className="font-bold text-foreground mb-3 flex items-center">
              <Package className="h-5 w-5 mr-2 text-green-600" />
              Niveles de Stock
            </h4>
            <div className="space-y-3">
              {stockData.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium text-foreground">{item.name}</span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recomendaciones */}
          <div className="p-4 border border-border rounded-xl">
            <h4 className="font-bold text-foreground mb-3">Recomendaciones</h4>
            <div className="space-y-2">
              {recommendations.map((rec, index) => {
                const IconComponent = rec.icon;
                return (
                  <div key={index} className="flex items-center p-2 rounded-lg bg-muted/30">
                    <IconComponent 
                      className={`h-4 w-4 mr-2 ${
                        rec.type === 'warning' ? 'text-yellow-500' : 'text-green-500'
                      }`} 
                    />
                    <span className="text-sm text-foreground">{rec.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <div className="text-2xl font-bold text-blue-600">15</div>
              <div className="text-sm text-blue-800">Productos activos</div>
            </div>
            <div className="text-center p-4 bg-green-50 border border-green-100 rounded-xl">
              <div className="text-2xl font-bold text-green-600">92%</div>
              <div className="text-sm text-green-800">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};