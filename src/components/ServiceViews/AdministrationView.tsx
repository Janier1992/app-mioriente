import { ArrowLeft, BarChart3, TrendingUp, DollarSign, FileText, Users } from 'lucide-react';

interface AdministrationViewProps {
  onBack: () => void;
}

export const AdministrationView = ({ onBack }: AdministrationViewProps) => {
  const businessMetrics = [
    { label: 'Ventas del mes', value: '$2,450,000', change: '+15%', trend: 'up' },
    { label: 'Productos vendidos', value: '1,234', change: '+8%', trend: 'up' },
    { label: 'Clientes activos', value: '89', change: '+12%', trend: 'up' },
    { label: 'Ticket promedio', value: '$45,000', change: '-2%', trend: 'down' },
  ];

  const documents = [
    { name: 'Informe de Ventas - Noviembre', type: 'PDF', date: '2024-11-30' },
    { name: 'Análisis de Inventario', type: 'Excel', date: '2024-11-28' },
    { name: 'Reporte Financiero', type: 'PDF', date: '2024-11-25' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-3 touch-target">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h2 className="text-xl font-bold text-foreground">Administración de Negocios</h2>
      </div>
      
      <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Panel de Control</h3>
          <p className="text-sm text-muted-foreground">Análisis de datos y gestión documental inteligente para tomar decisiones informadas.</p>
        </div>
        
        <div className="space-y-6">
          {/* Métricas del Negocio */}
          <div>
            <h4 className="font-bold text-foreground mb-3 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
              Métricas del Negocio
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {businessMetrics.map((metric, index) => (
                <div key={index} className="p-4 border border-border rounded-xl bg-muted/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">{metric.label}</span>
                    <span className={`text-xs font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentos Recientes */}
          <div>
            <h4 className="font-bold text-foreground mb-3 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Documentos Recientes
            </h4>
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{doc.name}</div>
                      <div className="text-xs text-muted-foreground">{doc.type} • {doc.date}</div>
                    </div>
                  </div>
                  <button className="text-primary text-sm font-medium hover:underline">
                    Ver
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Estadísticas Rápidas */}
          <div>
            <h4 className="font-bold text-foreground mb-3">Resumen Ejecutivo</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-4 bg-green-50 border border-green-100 rounded-xl">
                <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-green-600">$2.4M</div>
                <div className="text-xs text-green-800">Ingresos</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-blue-600">89</div>
                <div className="text-xs text-blue-800">Clientes</div>
              </div>
              <div className="text-center p-4 bg-purple-50 border border-purple-100 rounded-xl">
                <BarChart3 className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-purple-600">15%</div>
                <div className="text-xs text-purple-800">Crecimiento</div>
              </div>
            </div>
          </div>

          {/* Próximas Tareas */}
          <div className="p-4 border border-border rounded-xl bg-yellow-50 border-yellow-200">
            <h4 className="font-bold text-foreground mb-2">🎯 Próximas Tareas</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Revisar inventario de aguacates</li>
              <li>• Preparar informe mensual</li>
              <li>• Contactar nuevos proveedores</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};