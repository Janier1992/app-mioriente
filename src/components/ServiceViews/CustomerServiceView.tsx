import { ArrowLeft, MessageCircle, Bot, Clock, Users } from 'lucide-react';
import { useState } from 'react';

interface CustomerServiceViewProps {
  onBack: () => void;
}

export const CustomerServiceView = ({ onBack }: CustomerServiceViewProps) => {
  const [messages, setMessages] = useState([
    { id: 1, text: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?', isBot: true, time: '10:30' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: 'Gracias por tu consulta. Te ayudo a resolver tu solicitud de inmediato.',
        isBot: true,
        time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const quickResponses = [
    '¿Cómo hacer un pedido?',
    'Estado de mi pedido',
    'Productos disponibles',
    'Métodos de pago'
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-3 touch-target">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h2 className="text-xl font-bold text-foreground">Atención al Cliente</h2>
      </div>
      
      <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Chat Bot Inteligente</h3>
          <p className="text-sm text-muted-foreground">Atención 24/7 con respuestas automáticas y soporte en tiempo real.</p>
        </div>

        {/* Chat Interface */}
        <div className="border border-border rounded-xl p-4 mb-4 h-80 overflow-y-auto bg-muted/20">
          <div className="space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`
                  max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.isBot 
                      ? 'bg-card border border-border' 
                      : 'bg-primary text-primary-foreground'
                  }
                `}>
                  {message.isBot && (
                    <div className="flex items-center mb-1">
                      <Bot className="h-3 w-3 mr-1" />
                      <span className="text-xs font-medium">Asistente</span>
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Response Buttons */}
        <div className="mb-4">
          <p className="text-sm font-medium text-foreground mb-2">Preguntas frecuentes:</p>
          <div className="flex flex-wrap gap-2">
            {quickResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => setInputText(response)}
                className="text-xs px-3 py-2 bg-muted hover:bg-muted/80 rounded-full border border-border transition-colors"
              >
                {response}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-3 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Enviar
          </button>
        </div>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-blue-50 border border-blue-100 rounded-lg">
            <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-blue-600">24/7</div>
            <div className="text-xs text-blue-800">Disponibilidad</div>
          </div>
          <div className="text-center p-3 bg-green-50 border border-green-100 rounded-lg">
            <Users className="h-5 w-5 text-green-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-green-600">95%</div>
            <div className="text-xs text-green-800">Satisfacción</div>
          </div>
          <div className="text-center p-3 bg-purple-50 border border-purple-100 rounded-lg">
            <MessageCircle className="h-5 w-5 text-purple-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-purple-600">2min</div>
            <div className="text-xs text-purple-800">Resp. promedio</div>
          </div>
        </div>
      </div>
    </div>
  );
};