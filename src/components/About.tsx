import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="apropos" aria-labelledby="titre-apropos" className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-12 px-6 py-[88px]">
        <div className="relative aspect-[4/5] flex-[0_1_320px] overflow-hidden rounded-[20px] bg-[#E9E8E2]">
          <img
            src="/Belouettar%20Imed%20Eddine.webp"
            alt={t('portfolio2026.about.portraitAlt')}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-[18px]">
          <h2 id="titre-apropos" className="m-0 font-display text-[42px] font-bold">
            {t('portfolio2026.about.heading')}
          </h2>
          <p className="m-0 text-[19px] leading-relaxed text-[#3A3A3A]">
            {t('portfolio2026.about.paragraph1')}
          </p>
          <p className="m-0 text-[19px] leading-relaxed text-[#3A3A3A]">
            {t('portfolio2026.about.paragraph2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
