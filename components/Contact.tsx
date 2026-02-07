import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2, AlertCircle, Mail, Globe, Zap } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ email: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState<'email' | 'website' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.website) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // Artificial delay for dramatic effect (gamification feel)
      await new Promise(resolve => setTimeout(resolve, 1500));

      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            email: formState.email, 
            website: formState.website, 
            created_at: new Date().toISOString() 
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setFormState({ email: '', website: '' });
    } catch (error: any) {
      console.error('Error adding lead:', error);
      setStatus('error');
      if (error.code === '42P01') {
        setErrorMessage("Error de configuración: La tabla 'leads' no existe.");
      } else if (error.code === '42501') {
         setErrorMessage("Error de permisos: RLS bloqueó la inserción.");
      } else {
        setErrorMessage(error.message || 'Error de conexión.');
      }
    }
  };

  const isFormValid = formState.email.length > 3 && formState.website.length > 3;

  return (
    <section className="py-24 bg-space-950 relative overflow-hidden flex items-center justify-center min-h-[80vh]" id="audit">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] border border-space-800/30 rounded-full border-dashed opacity-20"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] border border-space-800/30 rounded-full border-dotted opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left space-y-8">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  ¿Listo para escalar la <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-gradient">
                    Montaña de Ingresos?
                  </span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                  Solo trabajamos con negocios que ya facturan y buscan multiplicar su ROI. 
                  Agenda una sesión de diagnóstico estratégico para evaluar tu "Product-Market Fit" y arquitectura actual.
                </p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="hidden md:flex gap-4 text-xs font-mono text-teal-500/60"
             >
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-teal-500 rounded-full animate-ping" />
                   LIVE_SERVER_STATUS: ONLINE
                </div>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-blue-500 rounded-full" />
                   DB_CONNECTION: SECURE
                </div>
             </motion.div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Holographic Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-space-900 p-8 rounded-2xl border border-space-800 shadow-2xl backdrop-blur-xl">
              
              <AnimatePresence mode='wait'>
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-400"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Recibida!</h3>
                    <p className="text-slate-400">
                      Nuestro sistema de IA está analizando tu perfil. Te contactaremos en breve.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-2 bg-space-800 hover:bg-space-700 text-white rounded-full text-sm font-medium transition-colors"
                    >
                      Enviar otra solicitud
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                  >
                    {/* Header of Form */}
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Secure Input // Protocol v2.1</span>
                       {status === 'loading' && <Loader2 className="w-4 h-4 text-teal-500 animate-spin" />}
                    </div>

                    {/* Email Input */}
                    <div className="relative group">
                      <motion.div 
                        className={`absolute inset-0 bg-teal-500/20 rounded-lg blur-sm transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`} 
                      />
                      <div className="relative flex items-center bg-space-950 border border-space-700 rounded-lg p-1 transition-colors focus-within:border-teal-500/50 focus-within:ring-1 focus-within:ring-teal-500/50">
                        <div className="p-3 text-slate-500">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input 
                          name="email"
                          type="email" 
                          placeholder="Correo Corporativo" 
                          value={formState.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          disabled={status === 'loading'}
                          className="w-full bg-transparent text-white placeholder-slate-600 focus:outline-none py-3 pr-4" 
                        />
                        {formState.email.length > 5 && formState.email.includes('@') && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="pr-3 text-teal-500">
                             <CheckCircle2 className="w-4 h-4" />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Website Input */}
                    <div className="relative group">
                      <motion.div 
                        className={`absolute inset-0 bg-blue-500/20 rounded-lg blur-sm transition-opacity duration-300 ${focusedField === 'website' ? 'opacity-100' : 'opacity-0'}`} 
                      />
                      <div className="relative flex items-center bg-space-950 border border-space-700 rounded-lg p-1 transition-colors focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50">
                        <div className="p-3 text-slate-500">
                           <Globe className="w-5 h-5" />
                        </div>
                        <input 
                          name="website"
                          type="text" 
                          placeholder="Sitio Web de la Empresa" 
                          value={formState.website}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('website')}
                          onBlur={() => setFocusedField(null)}
                          required
                          disabled={status === 'loading'}
                          className="w-full bg-transparent text-white placeholder-slate-600 focus:outline-none py-3 pr-4" 
                        />
                         {formState.website.length > 3 && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="pr-3 text-blue-500">
                             <CheckCircle2 className="w-4 h-4" />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{errorMessage}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button 
                      type="submit" 
                      disabled={status === 'loading'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 relative overflow-hidden group ${
                        isFormValid ? 'bg-teal-500 text-space-950 hover:bg-teal-400' : 'bg-space-800 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                           <Loader2 className="w-5 h-5 animate-spin" />
                           Procesando Datos...
                        </span>
                      ) : (
                        <>
                          <span className="relative z-10 flex items-center gap-2">
                            Aplicar Ahora
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                          {/* Animated sheen effect */}
                          {isFormValid && (
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                          )}
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-slate-600 text-center">
                        Al aplicar, aceptas recibir nuestro análisis inicial gratuito y ser contactado por nuestro equipo.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;