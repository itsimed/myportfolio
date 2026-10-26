import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
  /** Couleur de fond du document, pour éviter un liseré d'une autre couleur au rebond du défilement. */
  background?: string;
}

export const usePageMeta = ({ title, description, background }: PageMeta) => {
  useEffect(() => {
    document.title = title;
    let descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.append(descriptionMeta);
    }
    descriptionMeta.content = description;

    const previousBackground = document.body.style.background;
    if (background) document.body.style.background = background;
    return () => {
      document.body.style.background = previousBackground;
    };
  }, [title, description, background]);
};
