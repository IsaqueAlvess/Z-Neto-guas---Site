/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Droplets, 
  Truck, 
  Phone, 
  CheckCircle2, 
  Building2, 
  PartyPopper, 
  MessageSquare,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ChevronRight,
  Send,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';

const WHATSAPP_NUMBER = "5561985747277";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const products = [
  {
    id: 1,
    name: "Galão 20 Litros La Priori",
    description: "Água mineral pura em galão de 20L. Ideal para empresas e residências.",
    icon: <Droplets className="w-8 h-8 text-brand-500" />,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=800",
    category: "Galões"
  },
  {
    id: 2,
    name: "Garrafa 5 Litros La Priori",
    description: "Praticidade e economia para o consumo diário da sua família.",
    icon: <Droplets className="w-8 h-8 text-brand-400" />,
    image: "https://images.unsplash.com/photo-1616118132261-dd52b5242f01?auto=format&fit=crop&q=80&w=800",
    category: "Garrafas"
  },
  {
    id: 3,
    name: "Pacote 1,5 Litros La Priori",
    description: "Fardo com garrafas ideais para servir em mesas e reuniões.",
    icon: <Droplets className="w-8 h-8 text-brand-600" />,
    image: "https://images.unsplash.com/photo-1559839914-17aae19cea9e?auto=format&fit=crop&q=80&w=800",
    category: "Pacotes"
  },
  {
    id: 4,
    name: "Pacote 500ml Sem Gás",
    description: "Fardo prático para eventos, academias e consumo individual.",
    icon: <Droplets className="w-8 h-8 text-brand-300" />,
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&q=80&w=800",
    category: "Pacotes"
  },
  {
    id: 5,
    name: "Pacote 500ml Com Gás",
    description: "Refrescância La Priori em fardos para seu estoque ou festa.",
    icon: <Droplets className="w-8 h-8 text-brand-700" />,
    image: "https://images.unsplash.com/photo-1551731589-22240531d801?auto=format&fit=crop&q=80&w=800",
    category: "Pacotes"
  },
  {
    id: 6,
    name: "Água Saborizada",
    description: "Leveza La Priori com um toque especial e natural de frutas.",
    icon: <Droplets className="w-8 h-8 text-brand-200" />,
    image: "https://images.unsplash.com/photo-1556767667-0754773d559c?auto=format&fit=crop&q=80&w=800",
    category: "Especiais"
  },
  {
    id: 7,
    name: "Copos de Água",
    description: "Caixa de copos descartáveis 200ml para recepções e eventos.",
    icon: <Droplets className="w-8 h-8 text-brand-100" />,
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&q=80&w=800",
    category: "Eventos"
  }
];

const features = [
  {
    title: "Entrega em toda Brasília",
    description: "Atendemos todas as regiões administrativas com rapidez.",
    icon: <MapPin className="w-6 h-6" />
  },
  {
    title: "Atacado para Empresas",
    description: "Condições especiais para fornecimento contínuo.",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: "Eventos e Festas",
    description: "Logística completa para grandes e pequenos eventos.",
    icon: <PartyPopper className="w-6 h-6" />
  },
  {
    title: "Revendedor Autorizado",
    description: "Garantia de procedência e qualidade da água.",
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ phone: '', email: '', message: '' });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-brand-200">
                <Droplets className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="text-lg md:text-xl font-display font-bold text-slate-900">
                Neto <span className="text-brand-600">Água</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#produtos" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Produtos</a>
              <a href="#servicos" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Serviços</a>
              <a href="#orcamento" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Orçamento</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-200 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Pedir Agora
              </a>
            </div>

            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a 
                  href="#produtos" 
                  className="block text-lg font-medium text-slate-900 px-4 py-2 hover:bg-brand-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produtos
                </a>
                <a 
                  href="#servicos" 
                  className="block text-lg font-medium text-slate-900 px-4 py-2 hover:bg-brand-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
                <a 
                  href="#orcamento" 
                  className="block text-lg font-medium text-slate-900 px-4 py-2 hover:bg-brand-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Orçamento
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-600 text-white w-full py-4 rounded-2xl font-bold text-lg shadow-lg shadow-brand-200"
                >
                  <Phone className="w-5 h-5" />
                  Pedir no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold tracking-wider uppercase mb-6">
                <Truck className="w-3.5 h-3.5" />
                Entregas em toda Brasília
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
                Água Pura e <br className="hidden sm:block" />
                <span className="text-brand-600">Refrescante</span> na sua Porta.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-lg leading-relaxed">
                Revendedor autorizado de água mineral em Brasília. Fornecemos galões, garrafas e copos para sua casa, empresa ou evento com rapidez e confiança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-brand-700 transition-all hover:shadow-xl hover:shadow-brand-200 active:scale-95"
                >
                  Fazer Pedido via WhatsApp
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 bg-slate-50 text-slate-700 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-100 transition-all active:scale-95"
                >
                  Ver Produtos
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="Cliente" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-900">+500 Clientes Atendidos</p>
                  <p className="text-slate-500">Em toda a região de Brasília</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-400/20 blur-3xl rounded-full transform -translate-y-12"></div>
              <div className="relative bg-gradient-to-br from-brand-50 to-white p-8 rounded-[2.5rem] border border-brand-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800" 
                  alt="Água Mineral" 
                  className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">Entrega Rápida</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    Seu pedido entregue em tempo recorde em qualquer lugar de Brasília.
                  </p>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-brand-600">20L</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mais Vendido</span>
                    </div>
                    <Droplets className="w-8 h-8 text-brand-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Por que escolher o Neto?</h2>
            <p className="text-slate-600">Compromisso com a pureza e pontualidade no atendimento a empresas e residências.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nossos Produtos</h2>
              <p className="text-slate-600">Variedade completa para atender todas as suas necessidades de hidratação.</p>
            </div>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all"
            >
              Consultar preços atacado
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {product.icon}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-brand-600 transition-all active:scale-95"
                  >
                    Pedir Agora
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale / B2B Section */}
      <section className="py-24 bg-brand-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Fornecimento para <br />
                <span className="text-brand-200">Empresas e Eventos</span>
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  "Preços diferenciados para atacado",
                  "Cronograma de entrega programada",
                  "Faturamento para empresas",
                  "Suporte logístico para eventos de grande porte"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/90">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-brand-200" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-brand-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-brand-50 transition-all shadow-xl active:scale-95"
              >
                Solicitar Orçamento B2B
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" 
                alt="Eventos" 
                className="rounded-3xl shadow-2xl aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" 
                alt="Escritório" 
                className="rounded-3xl shadow-2xl aspect-square object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="orcamento" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Solicite um Orçamento</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Preencha os dados abaixo e nossa equipe entrará em contato com a melhor proposta para sua empresa ou evento.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Resposta em até 1 hora</h4>
                    <p className="text-sm text-slate-500">Durante o horário comercial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Preços de Atacado</h4>
                    <p className="text-sm text-slate-500">Condições especiais para grandes volumes.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Pedido Enviado!</h3>
                  <p className="text-slate-500">Em breve entraremos em contato com você.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                      Número de Contato *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      inputMode="tel"
                      placeholder="(61) 98574-7277"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-base"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                      E-mail (Opcional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="seu@email.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-base"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                      Detalhes do Orçamento
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Ex: Gostaria de 50 galões de 20L para entrega semanal..."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none text-base"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 bg-brand-600 text-white py-5 rounded-2xl text-lg font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Enviar Solicitação
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    Seus dados estão seguros e serão usados apenas para o orçamento.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-500 blur-[100px]"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-500 blur-[100px]"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Pronto para se hidratar?</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                Estamos prontos para te atender. Entre em contato agora e receba sua água em qualquer lugar de Brasília.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Ligue ou WhatsApp</p>
                    <p className="text-xl font-bold">(61) 98574-7277</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Área de Atendimento</p>
                    <p className="text-xl font-bold">Toda Brasília - DF</p>
                  </div>
                </div>
              </div>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-brand-400 transition-all shadow-2xl shadow-brand-500/20 active:scale-95"
              >
                Falar com Neto agora
                <MessageSquare className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <Droplets className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold text-slate-900">
                Neto <span className="text-brand-600">Água Mineral</span>
              </span>
            </div>
            
            <p className="text-slate-500 text-sm">
              © 2026 Neto Água Mineral. Todos os direitos reservados. Entregas em Brasília.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 text-slate-400 hover:text-brand-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-brand-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageSquare className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Peça pelo WhatsApp
        </span>
      </a>
    </div>
  );
}
