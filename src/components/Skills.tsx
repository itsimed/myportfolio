import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  SiFigma,
  SiCanva,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiVite,
  SiTypescript,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJira,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { MdDevices, MdStorage, MdGroups } from 'react-icons/md'
import { TbVectorBezier, TbChartHistogram, TbFilterCog } from 'react-icons/tb'

const Skills = () => {
  const { t } = useLanguage();
  
  const categories = [
    {
      title: t('skills.categories.design'),
      items: [
        { name: 'Figma', icon: <SiFigma className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Wireframing & Prototyping', icon: <TbVectorBezier className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Canva', icon: <SiCanva className="w-8 h-8 sm:w-10 sm:h-10" /> },
      ],
    },
    {
      title: t('skills.categories.frontend'),
      items: [
        { name: 'HTML5', icon: <SiHtml5 className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'CSS3 / SCSS', icon: (
          <span className="flex gap-1 sm:gap-2">
            <SiCss3 className="w-8 h-8 sm:w-10 sm:h-10" />
            <SiSass className="w-8 h-8 sm:w-10 sm:h-10" />
          </span>
        ) },
        { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'React.js', icon: <SiReact className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Expo', icon: <SiExpo className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Vite', icon: <SiVite className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Responsive Web Design', icon: <MdDevices className="w-8 h-8 sm:w-10 sm:h-10" /> },
      ],
    },
    {
      title: t('skills.categories.data'),
      items: [
        { name: 'Python', icon: <SiPython className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Pandas', icon: <SiPandas className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'NumPy', icon: <SiNumpy className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Data Visualization (Matplotlib)', icon: <TbChartHistogram className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Basic Machine Learning', icon: <SiScikitlearn className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Data Cleaning & Processing', icon: <TbFilterCog className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Database Design', icon: <MdStorage className="w-8 h-8 sm:w-10 sm:h-10" /> },
      ],
    },
    {
      title: t('skills.categories.management'),
      items: [
        { name: 'Agile / Scrum', icon: <SiJira className="w-8 h-8 sm:w-10 sm:h-10" /> },
        { name: 'Git & GitHub', icon: (
          <span className="flex gap-1 sm:gap-2">
            <SiGit className="w-8 h-8 sm:w-10 sm:h-10" />
            <SiGithub className="w-8 h-8 sm:w-10 sm:h-10" />
          </span>
        ) },
        { name: 'Communication & Collaboration', icon: <MdGroups className="w-8 h-8 sm:w-10 sm:h-10" /> },
      ],
    },
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.85,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
        opacity: { duration: 0.4 }
      }
    },
  };

  const [selected, setSelected] = useState<number>(0);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 bg-gradient-primary bg-clip-text text-transparent"
          >
            {t('skills.title')}
          </motion.h2>

          {/* Mobile Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:hidden mb-8"
          >
            <div className="bg-foreground/5 rounded-2xl p-2" role="tablist" aria-label="Skills categories">
              <div className="flex gap-1">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.title}
                    id={`skills-tab-${index}`}
                    role="tab"
                    aria-selected={selected === index}
                    aria-controls={`skills-panel-${index}`}
                    onClick={() => setSelected(index)}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 px-3 py-3 rounded-xl transition-all duration-200 text-xs font-medium ${
                      selected === index
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-foreground/90 hover:text-foreground hover:bg-foreground/10'
                    }`}
                  >
                    {selected === index && (
                      <motion.div
                        layoutId="mobileTabIndicator"
                        className="absolute inset-0 bg-primary rounded-xl -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category.title.split(' ')[0]}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Desktop Sidebar + Content */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Desktop Sidebar */}
            <motion.aside 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="hidden lg:block lg:w-80 w-full overflow-hidden"
            >
              <div className="bg-foreground/5 rounded-2xl p-5">
                <nav className="flex flex-col gap-2" role="tablist" aria-label="Skills categories">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.title}
                      id={`skills-tab-${index}`}
                      role="tab"
                      aria-selected={selected === index}
                      aria-controls={`skills-panel-${index}`}
                      onClick={() => setSelected(index)}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative whitespace-nowrap px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${
                        selected === index
                          ? 'text-primary'
                          : 'hover:bg-foreground/10 text-foreground/90'
                      }`}
                    >
                      {selected === index && (
                        <motion.div
                          layoutId="desktopTabIndicator"
                          className="absolute inset-0 bg-primary/10 rounded-xl shadow-sm"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{category.title}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Content */}
            <section className="flex-1" role="tabpanel" id={`skills-panel-${selected}`} aria-labelledby={`skills-tab-${selected}`}>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground/95">
                {categories[selected].title}
              </h3>
              <motion.div
                key={categories[selected].title}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
                aria-live="polite"
              >
                {categories[selected].items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1,
                      y: -10,
                      rotateY: 5,
                      rotateX: 5,
                      transition: { 
                        duration: 0.4, 
                        ease: [0.34, 1.56, 0.64, 1]
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ perspective: 1000 }}
                    className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-xl p-3 sm:p-4 md:p-6 text-center hover:border-primary/40 hover:shadow-xl hover:shadow-primary/25 transition-shadow duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className="text-foreground mb-2 sm:mb-3 flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="font-semibold text-sm sm:text-base">{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-base sm:text-lg text-foreground/85 max-w-3xl mx-auto">
              {t('skills.description')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;