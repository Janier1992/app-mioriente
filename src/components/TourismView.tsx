import { MapPin, Star, Navigation, Filter } from 'lucide-react';
import { useState } from 'react';

interface TourismViewProps {
  onBack: () => void;
}

export const TourismView = ({ onBack }: TourismViewProps) => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedFilter, setSelectedFilter] = useState('distancia');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'naturales', label: 'Naturales' },
    { id: 'culturales', label: 'Culturales' },
    { id: 'aventura', label: 'Aventura' },
    { id: 'gastronomia', label: 'Gastronomía' }
  ];

  const filters = [
    { id: 'distancia', label: 'Distancia' },
    { id: 'popularidad', label: 'Popularidad' },
    { id: 'precio', label: 'Precio' }
  ];

  const touristSpots = [
    {
      id: 1,
      name: 'Cascada El Salto',
      location: 'Guatapé, Antioquia',
      rating: 4.8,
      distance: '2.5 km',
      image: '🏞️',
      category: 'naturales',
      description: 'Hermosa cascada natural perfecta para senderismo'
    },
    {
      id: 2,
      name: 'Finca Cafetera La Esperanza',
      location: 'Jardín, Antioquia',
      rating: 4.9,
      distance: '15 km',
      image: '☕',
      category: 'culturales',
      description: 'Tour por cultivos de café con degustación'
    },
    {
      id: 3,
      name: 'Parapente Cerro Quitasol',
      location: 'Bello, Antioquia',
      rating: 4.7,
      distance: '8 km',
      image: '🪂',
      category: 'aventura',
      description: 'Experiencia única de parapente con vista panorámica'
    },
    {
      id: 4,
      name: 'Restaurante Típico El Fogón',
      location: 'Marinilla, Antioquia',
      rating: 4.6,
      distance: '12 km',
      image: '🍽️',
      category: 'gastronomia',
      description: 'Comida tradicional antioqueña con productos locales'
    }
  ];

  const filteredSpots = touristSpots.filter(spot => 
    selectedCategory === 'todos' || spot.category === selectedCategory
  );

  return (
    <div className="space-y-4 pb-20">
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 pb-4">
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Buscar destinos turísticos..."
            className="form-input pl-10"
          />
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Filter Options */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`
                  px-3 py-1 rounded-lg text-xs border transition-colors
                  ${selectedFilter === filter.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border hover:bg-muted/50'
                  }
                `}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Filter className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Tourist Spots List */}
      <div className="space-y-4">
        {filteredSpots.map((spot) => (
          <div key={spot.id} className="bg-card rounded-xl shadow-soft border border-border overflow-hidden card-interactive">
            <div className="flex p-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mr-4 text-2xl">
                {spot.image}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">{spot.name}</h3>
                <div className="flex items-center mb-2">
                  <MapPin className="h-3 w-3 text-muted-foreground mr-1" />
                  <span className="text-xs text-muted-foreground">{spot.location}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{spot.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center mr-3">
                      <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                      <span className="text-xs font-medium text-foreground">{spot.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Navigation className="h-3 w-3 text-blue-500 mr-1" />
                      <span className="text-xs text-muted-foreground">{spot.distance}</span>
                    </div>
                  </div>
                  <button className="bg-primary text-primary-foreground px-3 py-1 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Preview */}
      <div className="bg-card rounded-xl shadow-soft border border-border p-4">
        <h4 className="font-bold text-foreground mb-3 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-primary" />
          Mapa de Destinos
        </h4>
        <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ddd" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(#grid)"/></svg>')}")` }} />
          <div className="text-center text-muted-foreground">
            <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-sm">Mapa interactivo próximamente</p>
          </div>
          {/* Location pins */}
          <div className="absolute top-4 left-8 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm" />
          <div className="absolute bottom-8 right-12 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm" />
          <div className="absolute top-12 right-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm" />
        </div>
      </div>
    </div>
  );
};