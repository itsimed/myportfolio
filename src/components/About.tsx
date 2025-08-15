import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-primary bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 items-start gap-8 sm:gap-10 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1 hidden sm:block"
            >
              <div className="w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 mx-auto relative">
                <div className="w-full h-full bg-gradient-primary rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <div className="w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <svg className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 order-1 md:order-2"
            >
              <p className="text-base sm:text-lg leading-relaxed text-muted">
                {t('about.description1')}
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-muted">
                {t('about.description2')}
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm sm:text-base">{t('about.skills.uiux')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20 text-sm sm:text-base">{t('about.skills.frontend')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent rounded-full border border-accent/20 text-sm sm:text-base">{t('about.skills.dataAnalysis')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-foreground/10 text-foreground rounded-full border border-foreground/20 text-sm sm:text-base">{t('about.skills.database')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm sm:text-base">{t('about.skills.projectManagement')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20 text-sm sm:text-base">{t('about.skills.dataDriven')}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;