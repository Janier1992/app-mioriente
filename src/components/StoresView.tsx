import { Store, Search, MapPin, Star, ShoppingCart, Filter } from 'lucide-react';
import { useState } from 'react';

interface StoresViewProps {
  onBack: () => void;
}

export const StoresView = ({ onBack }: StoresViewProps) => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [cartItems, setCartItems] = useState<any[]>([]);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'frutas', label: 'Frutas' },
    { id: 'verduras', label: 'Verduras' },
    { id: 'lacteos', label: 'Lácteos' },
    { id: 'granos', label: 'Granos' }
  ];

  const stores = [
    {
      id: 1,
      name: 'Finca Los Mangos',
      category: 'frutas',
      rating: 4.8,
      distance: '1.2 km',
      image: '🥭',
      description: 'Frutas tropicales frescas directamente del cultivo',
      products: [
        { id: 1, name: 'Mango Tommy', price: 8500, unit: '1 kg', stock: 50 },
        { id: 2, name: 'Mango Keitt', price: 7200, unit: '1 kg', stock: 30 }
      ]
    },
    {
      id: 2,
      name: 'Plataneros del Oriente',
      category: 'frutas',
      rating: 4.5,
      distance: '2.8 km',
      image: '🍌',
      description: 'Plátanos orgánicos certificados',
      products: [
        { id: 3, name: 'Plátano Orgánico', price: 3500, unit: '1 kg', stock: 120 },
        { id: 4, name: 'Plátano Maduro', price: 4000, unit: '1 kg', stock: 80 }
      ]
    },
    {
      id: 3,
      name: 'Verduras del Campo',
      category: 'verduras',
      rating: 4.7,
      distance: '0.8 km',
      image: '🥬',
      description: 'Verduras frescas cultivadas sin químicos',
      products: [
        { id: 5, name: 'Lechuga Orgánica', price: 2500, unit: '1 unidad', stock: 40 },
        { id: 6, name: 'Tomate Cherry', price: 6000, unit: '500g', stock: 25 }
      ]
    },
    {
      id: 4,
      name: 'Lácteos La Granja',
      category: 'lacteos',
      rating: 4.9,
      distance: '3.5 km',
      image: '🥛',
      description: 'Productos lácteos artesanales de alta calidad',
      products: [
        { id: 7, name: 'Queso Campesino', price: 15000, unit: '500g', stock: 15 },
        { id: 8, name: 'Leche Fresca', price: 4500, unit: '1 litro', stock: 60 }
      ]
    }
  ];

  const filteredStores = stores.filter(store => 
    selectedCategory === 'todos' || store.category === selectedCategory
  );

  const addToCart = (product: any, storeInfo: any) => {
    const cartItem = {
      ...product,
      storeId: storeInfo.id,
      storeName: storeInfo.name,
      quantity: 1
    };
    setCartItems(prev => [...prev, cartItem]);
  };

  return (
    <div className="space-y-4 pb-20">
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 pb-4">
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Buscar tiendas y productos..."
            className="form-input pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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

        {/* Filter and Cart */}
        <div className="flex items-center justify-between mt-3">
          <button className="flex items-center gap-2 px-3 py-1 border border-border rounded-lg hover:bg-muted/50 transition-colors">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Filtros</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm font-medium">{cartItems.length}</span>
          </button>
        </div>
      </div>

      {/* Stores List */}
      <div className="space-y-6">
        {filteredStores.map((store) => (
          <div key={store.id} className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
            {/* Store Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mr-4 text-2xl">
                  {store.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1">{store.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{store.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium text-foreground">{store.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-blue-500 mr-1" />
                      <span className="text-sm text-muted-foreground">{store.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-3">Productos Disponibles</h4>
              <div className="grid grid-cols-1 gap-3">
                {store.products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <h5 className="font-medium text-foreground">{product.name}</h5>
                      <p className="text-sm text-muted-foreground">{product.unit}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-bold text-primary">${product.price.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground">Stock: {product.stock}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product, store)}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Agregar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-card rounded-xl shadow-soft border border-border p-4">
        <h4 className="font-bold text-foreground mb-3">Estadísticas Rápidas</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-xl font-bold text-primary">24</div>
            <div className="text-xs text-muted-foreground">Tiendas activas</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">156</div>
            <div className="text-xs text-muted-foreground">Productos</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-orange-600">4.7★</div>
            <div className="text-xs text-muted-foreground">Promedio</div>
          </div>
        </div>
      </div>
    </div>
  );
};