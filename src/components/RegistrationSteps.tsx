import { CheckCircle } from 'lucide-react';

interface RegistrationStepsProps {
  onRegisterClick: () => void;
}

export const RegistrationSteps = ({ onRegisterClick }: RegistrationStepsProps) => {
  const steps = [
    'Completa tus datos básicos',
    'Sube tus documentos',
    'Activa tu tienda'
  ];

  return (
    <section className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
      <div className="flex items-start mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 mt-0.5">
          <CheckCircle className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-bold text-foreground">Regístrate en 3 pasos</h3>
          <p className="text-sm text-muted-foreground">Comienza a vender hoy mismo</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3 font-semibold">
              {index + 1}
            </div>
            <span className="text-sm text-foreground">{step}</span>
          </div>
        ))}
      </div>
      
      <button 
        onClick={onRegisterClick}
        className="w-full mt-4 gradient-primary text-white py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity touch-target"
      >
        Comenzar Registro
      </button>
    </section>
  );
};