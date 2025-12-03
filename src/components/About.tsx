import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7,
            ease: [0.25, 0.4, 0.25, 1],
            opacity: { duration: 0.6 }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-primary bg-clip-text text-transparent"
          >
            {t('about.title')}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 items-start gap-8 sm:gap-10 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative order-2 md:order-1 hidden sm:block"
            >
              <div className="w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 mx-auto relative">
                <div className="w-full h-full bg-gradient-primary rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <div className="w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <img src="https://storage.googleapis.com/publicasse/my_portfolio/Belouettar%20Imed%20Eddine.webp" alt="Photo de profil de Imed Eddine Belouettar" className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4 sm:space-y-6 order-1 md:order-2"
            >
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90 max-w-2xl">
                {t('about.description1')}
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-foreground/90 max-w-2xl">
                {t('about.description2')}
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90 max-w-2xl">
                {t('about.description3')}
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm sm:text-base">{t('about.skills.uiux')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20 text-sm sm:text-base">{t('about.skills.frontend')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent rounded-full border border-accent/20 text-sm sm:text-base">{t('about.skills.accessibility')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-foreground/10 text-foreground rounded-full border border-foreground/20 text-sm sm:text-base">{t('about.skills.userResearch')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm sm:text-base">{t('about.skills.projectManagement')}</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20 text-sm sm:text-base">{t('about.skills.inclusiveDesign')}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;