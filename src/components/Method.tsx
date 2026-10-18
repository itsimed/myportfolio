import { useLanguage } from '../hooks/useLanguage';

const Method = () => {
  const { t } = useLanguage();

  return (
    <section id="methode" aria-labelledby="titre-methode" className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-[88px]">
      <h2 id="titre-methode" className="m-0 font-display text-5xl font-bold">
        {t('portfolio2026.method.heading')}
      </h2>
      <ol className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((index) => (
          <li key={index} className="flex flex-col gap-2.5 rounded-[18px] border border-border bg-white p-7">
            <span aria-hidden="true" className="font-display text-[32px] font-extrabold text-primary">
              {index + 1}
            </span>
            <h3 className="m-0 text-xl font-semibold">{t(`portfolio2026.method.steps.${index}.title`)}</h3>
            <p className="m-0 text-base leading-relaxed text-[#3A3A3A]">
              {t(`portfolio2026.method.steps.${index}.description`)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Method;
