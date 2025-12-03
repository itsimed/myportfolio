import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'wassalni',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase'],
      liveDemo: 'https://imgur.com/a/wassalni-app-B01sowE',
      github: 'https://github.com/itsimed/wassalni',
      image: 'https://storage.googleapis.com/publicasse/my_portfolio/wass.webp',
    },
    {
      id: 2,
      title: 'divanhane',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
      liveDemo: 'https://divanhane.vercel.app',
      github: 'https://github.com/itsimed/divanhane',
      image: 'https://storage.googleapis.com/publicasse/my_portfolio/divan.webp',
    },
    {
      id: 3,
      title: 'bdtech',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
      liveDemo: 'https://bdtech-azure.vercel.app/',
      github: 'https://github.com/itsimed/bdtech',
      image: 'https://storage.googleapis.com/publicasse/my_portfolio/bd.webp',
    },
    {
      id: 4,
      title: 'cabinetcm',
      liveDemo: 'https://cabinetcm.vercel.app/',
      github: 'https://github.com/itsimed/cabinetcm',
      image: 'https://storage.googleapis.com/publicasse/my_portfolio/cm.webp',
    },
    {
      id: 5,
      title: 'elitepartners',
      liveDemo: 'https://elitepartnersgroup.vercel.app/',
      github: 'https://github.com/itsimed/elitepartnersgroup',
      image: 'https://storage.googleapis.com/publicasse/my_portfolio/epg.webp',
    },
    {
      id: 6,
      title: 'picci',
      liveDemo: 'https://picci-five.vercel.app/',
      github: 'https://github.com/itsimed/picci',
      image: 'https://storage.googleapis.com/publicasse/my_portfolio/picci.webp',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-end justify-between mb-10">
            <motion.h2 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.7,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              {t('projects.title')}
            </motion.h2>
            <motion.a
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: 5 }}
              href="https://github.com/itsimed"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground/90 hover:text-foreground transition-colors"
            >
              {t('projects.viewAll')}
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-foreground/20">
                →
              </span>
            </motion.a>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
                }}
                className="group rounded-2xl overflow-hidden border border-foreground/10 bg-gradient-to-b from-white/5 to-white/[0.02] hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Cover */}
                <div className="relative h-40 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 opacity-30" />
                  <img
                    src={project.image}
                    alt={`${t(`projects.projects.${project.title}.title`)} project preview`}
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{t(`projects.projects.${project.title}.title`)}</h3>
                  <p className="text-foreground/85 mb-5 text-sm leading-relaxed">{t(`projects.projects.${project.title}.description`)}</p>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-primary text-background text-center py-2.5 px-4 rounded-full font-semibold text-sm hover:shadow-lg transition-shadow duration-300"
                      aria-label={`${t(`projects.projects.${project.title}.button`)} - ${t(`projects.projects.${project.title}.title`)}`}
                    >
                      {t(`projects.projects.${project.title}.button`)}
                    </motion.a>
                    {project.title !== 'wassalni' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 border border-foreground/20 text-foreground text-center py-2.5 px-4 rounded-full font-semibold text-sm hover:border-primary/30 transition-colors duration-300"
                        aria-label={`View ${t(`projects.projects.${project.title}.title`)} on GitHub`}
                      >
                        {t('projects.github')}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.7,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-16"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/85 mb-8"
            >
              {t('projects.moreProjects')}
            </motion.p>
            <motion.a
              href="https://github.com/itsimed"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-background hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              {t('projects.viewAllProjects')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;