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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [selected, setSelected] = useState<number>(0);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 bg-gradient-primary bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>

          {/* Mobile Tabs */}
          <div className="lg:hidden mb-8">
            <div className="bg-foreground/5 rounded-2xl p-2">
              <div className="flex gap-1">
                {categories.map((category, index) => (
                  <button
                    key={category.title}
                    onClick={() => setSelected(index)}
                    className={`flex-1 px-3 py-3 rounded-xl transition-all duration-200 text-xs font-medium ${
                      selected === index
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-foreground/70 hover:text-foreground hover:bg-foreground/10'
                    }`}
                  >
                    {category.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Sidebar + Content */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block lg:w-80 w-full overflow-hidden">
              <div className="bg-foreground/5 rounded-2xl p-5">
                <nav className="flex flex-col gap-2">
                  {categories.map((category, index) => (
                    <button
                      key={category.title}
                      onClick={() => setSelected(index)}
                      className={`whitespace-nowrap px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${
                        selected === index
                          ? 'bg-primary/10 text-primary shadow-sm'
                          : 'hover:bg-foreground/10 text-foreground/80'
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <section className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground/80">
                {categories[selected].title}
              </h3>
              <motion.div
                key={categories[selected].title}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
              >
                {categories[selected].items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-xl p-3 sm:p-4 md:p-6 text-center hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="text-foreground mb-2 sm:mb-3 flex items-center justify-center">{skill.icon}</div>
                    <h4 className="font-semibold text-sm sm:text-base">{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-base sm:text-lg text-muted max-w-3xl mx-auto">
              {t('skills.description')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;