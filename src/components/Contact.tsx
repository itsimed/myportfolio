import { useLanguage } from '../hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      aria-labelledby="titre-contact"
      className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-6 py-24"
    >
      <h2 id="titre-contact" className="m-0 whitespace-pre-line font-display text-[clamp(40px,5vw,64px)] font-extrabold leading-tight">
        {t('portfolio2026.contact.heading')}
      </h2>
      <a href="mailto:ie.belouettar@gmail.com" className="text-2xl font-semibold">
        ie.belouettar@gmail.com
      </a>
      <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
        <li>
          <a href="https://www.linkedin.com/in/ie-belouettar/" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border-2 border-foreground px-[22px] font-semibold text-foreground no-underline">
            {t('portfolio2026.contact.linkedin')}
          </a>
        </li>
        <li>
          <a href="/CV%20octobre.pdf" download className="inline-flex min-h-12 items-center rounded-full border-2 border-foreground px-[22px] font-semibold text-foreground no-underline">
            {t('portfolio2026.contact.cv')}
          </a>
        </li>
        <li>
          <a href="https://github.com/itsimed" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border-2 border-foreground px-[22px] font-semibold text-foreground no-underline">
            {t('portfolio2026.contact.github')}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
