import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import '../src/index.css';
import App from '../src/App';

const routes = [
  ['home page', '/', /Des produits clairs/],
  ['Wassalni case study', '/projects/wassalni/', /Le covoiturage longue distance, en toute confiance/],
  ['Sanou case study', '/projects/sanou-va-bien/', /Une petite scène/],
  ['FDS Institut case study', '/projects/fds-institut/', /FDS\s*Institut/],
  ['accessibility statement', '/accessibility/', 'Déclaration d’accessibilité'],
  ['not-found page', '/not-a-real-page/', 'Page introuvable'],
] as const;

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, '', '/');
});

afterEach(() => {
  cleanup();
});

describe('page accessibility', () => {
  it.each(routes)('has no axe violations on the %s', async (_name, path, heading) => {
    window.history.replaceState({}, '', path);
    render(<App />);

    expect(await screen.findByRole('heading', { name: heading, level: 1 }, { timeout: 5000 })).toBeTruthy();
    // Le titre est posé par un effet après le chargement différé de la page.
    await waitFor(() => expect(document.title).not.toBe(''));

    const results = await axe.run(document.documentElement, {
      rules: { 'color-contrast': { enabled: false } },
    });
    expect(results.violations.map(({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      elements: nodes.map(({ target }) => target),
    }))).toEqual([]);
  });
});

const englishRoutes = [
  ['home page', '/', /Clear products/],
  ['Wassalni case study', '/projects/wassalni/', /Long-distance carpooling, with confidence/],
  ['Sanou case study', '/projects/sanou-va-bien/', /A small stage/],
  ['FDS Institut case study', '/projects/fds-institut/', /FDS\s*Institut/],
] as const;

describe('English pages', () => {
  it.each(englishRoutes)('has no axe violations on the English %s', async (_name, path, heading) => {
    localStorage.setItem('language', 'en');
    window.history.replaceState({}, '', path);
    render(<App />);

    expect(await screen.findByRole('heading', { name: heading, level: 1 }, { timeout: 5000 })).toBeTruthy();
    expect(document.documentElement.lang).toBe('en');

    const results = await axe.run(document.documentElement, {
      rules: { 'color-contrast': { enabled: false } },
    });
    expect(results.violations.map(({ id, nodes }) => ({ id, elements: nodes.map(({ target }) => target) }))).toEqual([]);
  });

  it('switches from French to English with the language buttons', async () => {
    render(<App />);
    // La page contient deux boutons de langue (en-tête bureau et en-tête mobile) ; un seul est affiché selon la largeur.
    const [english] = await screen.findAllByRole('button', { name: 'EN, passer le site en anglais' });
    expect(english.textContent).toBe('EN');

    fireEvent.click(english);

    expect(await screen.findByRole('heading', { name: /Clear products/, level: 1 }, { timeout: 5000 })).toBeTruthy();
    expect((await screen.findAllByRole('button', { name: 'FR, switch the site to French' }))[0].textContent).toBe('FR');
    expect(document.title).toBe('Imed Belouettar – UX/UI Product Designer');
    expect(localStorage.getItem('language')).toBe('en');
  });
});

describe('home navigation', () => {
  it('opens the mobile menu, then closes it with Escape and returns focus', async () => {
    render(<App />);
    const toggle = await screen.findByRole('button', { name: 'Menu' });
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.getAttribute('aria-controls')).toBe('menu-principal');

    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(document.getElementById('menu-principal')?.getAttribute('data-open')).toBe('true');

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(toggle);
  });
});

describe('removed pages', () => {
  it.each(['/projects/bdtech/', '/projects/miashs/'])('shows the not-found page for %s', async (path) => {
    window.history.replaceState({}, '', path);
    render(<App />);
    expect(await screen.findByRole('heading', { name: 'Page introuvable', level: 1 })).toBeTruthy();
  });
});

describe('designed pages', () => {
  it('exposes a skip link and a focusable main landmark', async () => {
    render(<App />);
    const skip = await screen.findByRole('link', { name: 'Aller au contenu principal' });
    expect(skip.getAttribute('href')).toBe('#main-content');
    expect(document.getElementById('main-content')?.tagName).toBe('MAIN');
    expect(document.title).toBe('Imed Belouettar – Product Designer UX/UI');
  });

  it('marks external links as opening in a new window', async () => {
    render(<App />);
    const linkedin = await screen.findByRole('link', { name: /LinkedIn.*nouvelle fenêtre/ });
    expect(linkedin.getAttribute('target')).toBe('_blank');
    expect(linkedin.getAttribute('rel')).toContain('noopener');
  });
});
