import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SiGithub, SiLinkedin, SiTelegram } from 'react-icons/si';
import { HiOutlineMail, HiOutlineGlobeAlt } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; subject?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = t('contact.form.errors.name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t('contact.form.errors.email');
    if (!formData.subject.trim()) newErrors.subject = t('contact.form.errors.subject');
    if (formData.message.trim().length < 10) newErrors.message = t('contact.form.errors.message');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    
    try {
      // Configuration EmailJS
      const serviceId = 'service_a99rdnb';
      const templateId = 'template_g7mcdge';
      const publicKey = 'O6YC_1QFGdyFHdCvG';
      
      // Paramètres du template EmailJS
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
      
      // Envoi de l'email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitMessage(t('contact.form.success'));
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      setSubmitMessage(t('contact.form.error'));
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
      
      // Clear success/error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setIsSuccess(false);
      }, 5000);
    }
  };

  const socialLinks = useMemo(() => ([
    { 
      name: 'GitHub', 
      url: 'https://github.com/itsimed', 
      icon: <SiGithub className="w-6 h-6" />,
      color: 'hover:bg-gray-900 hover:border-gray-700'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/ie-belouettar/', 
      icon: <SiLinkedin className="w-6 h-6" />,
      color: 'hover:bg-blue-600 hover:border-blue-500'
    },
    { 
      name: 'Telegram', 
      url: 'https://t.me/itsimedd', 
      icon: <SiTelegram className="w-6 h-6" />,
      color: 'hover:bg-blue-500 hover:border-blue-400'
    },
  ]), []);

  const contactInfo = [
    {
      icon: <HiOutlineMail className="w-6 h-6" />,
      title: t('contact.contactInfo.email'),
      value: 'ie.belouettar@gmail.com',
      link: 'mailto:ie.belouettar@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: <HiOutlineGlobeAlt className="w-6 h-6" />,
      title: t('contact.contactInfo.availability'),
      value: t('contact.contactInfo.availableForFreelance'),
      link: '#',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="contact" className="pt-8 pb-24 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Full-width scrolling CONTACT banner */}
      <div className="relative z-20 w-screen left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-primary py-3 md:py-4 overflow-hidden mb-8 md:mb-12 lg:mb-16">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="flex items-center whitespace-nowrap gap-4 md:gap-8 lg:gap-12"
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <React.Fragment key={`a-frag-${i}`}>
              <span
                className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-widest text-background banner-word animate-letter-breathe animate-text-glow"
              >
                {'CONTACT'.split('').map((ch, j) => (
                  <span
                    key={`a-${i}-${j}`}
                    className="banner-letter"
                    style={{ animationDelay: `${j * 0.12}s` }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
              <span className="banner-separator-star" aria-hidden="true">
                <img src="/star-shuriken.svg" alt="" />
              </span>
            </React.Fragment>
          ))}
          {Array.from({ length: 18 }).map((_, i) => (
            <React.Fragment key={`b-frag-${i}`}>
              <span
                className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-widest text-background banner-word animate-letter-breathe animate-text-glow"
              >
                {'CONTACT'.split('').map((ch, j) => (
                  <span
                    key={`b-${i}-${j}`}
                    className="banner-letter"
                    style={{ animationDelay: `${j * 0.12}s` }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
              <span className="banner-separator-star" aria-hidden="true">
                <img src="/star-shuriken.svg" alt="" />
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Removed header title; replaced by above scrolling banner */}
          
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-foreground/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t('contact.getInTouch')}
                </h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 group"
                    >
                      <div className={`${info.color} group-hover:scale-110 transition-transform duration-200`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <a 
                          href={info.link} 
                          className="text-foreground/85 hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">{t('contact.social.followMe')}</h4>
                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 sm:px-4 h-10 sm:h-12 bg-foreground/5 border border-foreground/10 rounded-xl inline-flex items-center justify-center transition-all duration-300 gap-2 ${link.color}`}
                        aria-label={`Visit my ${link.name} profile`}
                      >
                        {link.icon}
                        <span className="text-xs sm:text-sm font-medium">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-foreground/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t('contact.sendMessage')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground/95">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        autoComplete="name"
                        className={`w-full px-4 py-4 bg-foreground/5 border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 ${
                          errors.name ? 'border-red-500 bg-red-500/5' : 'border-foreground/10 hover:border-foreground/20'
                        }`}
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground/95">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        autoComplete="email"
                        className={`w-full px-4 py-4 bg-foreground/5 border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 ${
                          errors.email ? 'border-red-500 bg-red-500/5' : 'border-foreground/10 hover:border-foreground/20'
                        }`}
                        placeholder="mail@example.com"
                      />
                      {errors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-foreground/95">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      autoComplete="off"
                      className={`w-full px-4 py-4 bg-foreground/5 border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 ${
                        errors.subject ? 'border-red-500 bg-red-500/5' : 'border-foreground/10 hover:border-foreground/20'
                      }`}
                      placeholder={t('contact.form.subjectPlaceholder')}
                    />
                    {errors.subject && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground/95">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-4 bg-foreground/5 border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-500 bg-red-500/5' : 'border-foreground/10 hover:border-foreground/20'
                      }`}
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-background py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:y-0"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
                        {t('contact.form.sending')}
                      </div>
                    ) : (
                      t('contact.form.send')
                    )}
                  </motion.button>
                  
                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`rounded-xl p-4 text-center ${
                        isSuccess 
                          ? 'bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20' 
                          : 'bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20'
                      }`}
                    >
                      <p className={`font-semibold flex items-center justify-center gap-2 ${
                        isSuccess ? 'text-green-500' : 'text-red-500'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${
                          isSuccess ? 'bg-green-500' : 'bg-red-500'
                        }`}></span>
                        {submitMessage}
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;