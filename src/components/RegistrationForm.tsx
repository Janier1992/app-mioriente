import { useState } from 'react';
import { UserPlus, ArrowLeft } from 'lucide-react';

interface RegistrationFormProps {
  onBack: () => void;
  onSubmit: (data: any) => void;
}

export const RegistrationForm = ({ onBack, onSubmit }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    nombreNegocio: '',
    nombrePropietario: '',
    email: '',
    telefono: '',
    departamento: '',
    municipio: '',
    direccion: '',
    tipoNegocio: '',
    productos: '',
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-3 touch-target">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h2 className="text-xl font-bold text-foreground">Registro de Tiendas</h2>
      </div>
      
      <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Regístrate como Vendedor</h3>
          <p className="text-sm text-muted-foreground">Únete a nuestra plataforma y comienza a vender tus productos agrícolas en línea.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="nombreNegocio">
              Nombre del Negocio *
            </label>
            <input 
              className="form-input" 
              type="text" 
              id="nombreNegocio"
              name="nombreNegocio"
              value={formData.nombreNegocio}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="nombrePropietario">
              Nombre del Propietario *
            </label>
            <input 
              className="form-input" 
              type="text" 
              id="nombrePropietario"
              name="nombrePropietario"
              value={formData.nombrePropietario}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="email">
              Correo Electrónico *
            </label>
            <input 
              className="form-input" 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="telefono">
              Teléfono *
            </label>
            <input 
              className="form-input" 
              type="tel" 
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="departamento">
              Departamento *
            </label>
            <select 
              className="form-input" 
              id="departamento"
              name="departamento"
              value={formData.departamento}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecciona departamento</option>
              <option value="antioquia">Antioquia</option>
              <option value="valle">Valle del Cauca</option>
              <option value="cundinamarca">Cundinamarca</option>
              <option value="santander">Santander</option>
              <option value="nariño">Nariño</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="municipio">
              Municipio *
            </label>
            <input 
              className="form-input" 
              type="text" 
              id="municipio"
              name="municipio"
              value={formData.municipio}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="direccion">
              Dirección *
            </label>
            <input 
              className="form-input" 
              type="text" 
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="tipoNegocio">
              Tipo de Negocio *
            </label>
            <select 
              className="form-input" 
              id="tipoNegocio"
              name="tipoNegocio"
              value={formData.tipoNegocio}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecciona tipo</option>
              <option value="agricultor">Agricultor/Finca</option>
              <option value="tienda">Tienda de barrio</option>
              <option value="mercado">Puesto de mercado</option>
              <option value="cooperativa">Cooperativa</option>
              <option value="hotel">Hotel</option>
              <option value="glamping">Glamping</option>
              <option value="restaurante">Restaurante</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2" htmlFor="productos">
              Productos/Servicios Principales *
            </label>
            <input 
              className="form-input" 
              type="text" 
              id="productos"
              name="productos"
              value={formData.productos}
              onChange={handleInputChange}
              placeholder="Ej: plátano, mango, habitaciones, tours" 
              required 
            />
          </div>
          
          <div className="flex items-start mt-4">
            <input 
              type="checkbox" 
              id="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleCheckboxChange}
              className="h-5 w-5 mt-1 text-primary focus:ring-primary border-border rounded" 
              required 
            />
            <label htmlFor="acceptTerms" className="ml-2 text-sm text-foreground">
              Acepto los <span className="text-primary">Términos y Condiciones</span> y la <span className="text-primary">Política de Privacidad</span>
            </label>
          </div>
          
          <button 
            type="submit" 
            className="w-full gradient-primary text-white py-3 rounded-xl font-semibold mt-6 hover:opacity-90 transition-opacity touch-target"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
};