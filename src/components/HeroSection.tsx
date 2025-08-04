import heroImage from '@/assets/hero-oriente.jpg';

interface HeroSectionProps {
  onVenderClick: () => void;
  onComprarClick: () => void;
}

export const HeroSection = ({ onVenderClick, onComprarClick }: HeroSectionProps) => {
  return (
    <section className="gradient-oriente text-white rounded-2xl p-6 mb-6 relative overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-3 leading-tight">
          Conectamos <span className="text-yellow-200">tiendas</span> con <span className="text-yellow-200">consumidores</span>
        </h2>
        <p className="text-sm mb-5 opacity-90 leading-relaxed">
          Plataforma móvil para que vendas tus productos agrícolas en línea con tecnología de vanguardia.
        </p>
        <div className="flex space-x-3">
          <button 
            onClick={onVenderClick}
            className="bg-white text-primary text-sm px-4 py-3 rounded-xl font-semibold flex-1 hover:bg-white/90 transition-colors touch-target"
          >
            Vender en la App
          </button>
          <button 
            onClick={onComprarClick}
            className="border-2 border-white text-white text-sm px-4 py-3 rounded-xl flex-1 hover:bg-white/10 transition-colors touch-target"
          >
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
};