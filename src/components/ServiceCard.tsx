import { ReactNode } from 'react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  variant: 'chat' | 'admin' | 'automation' | 'inventory';
  onClick: (serviceId: string) => void;
}

export const ServiceCard = ({ id, title, description, icon, variant, onClick }: ServiceCardProps) => {
  const variantStyles = {
    chat: 'service-chat',
    admin: 'service-admin', 
    automation: 'service-automation',
    inventory: 'service-inventory'
  };

  return (
    <div 
      onClick={() => onClick(id)}
      className="bg-card p-4 rounded-xl shadow-soft w-64 card-interactive cursor-pointer border border-border hover:shadow-card transition-all duration-200"
    >
      <div className="flex items-center mb-3">
        <div className={`service-icon ${variantStyles[variant]} mr-3`}>
          {icon}
        </div>
        <h4 className="font-bold text-foreground">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};