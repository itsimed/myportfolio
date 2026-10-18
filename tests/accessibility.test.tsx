import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import '../src/index.css';
import App from '../src/App';

const routes = [
  ['home page', '/', 'Développeur Front-end'],
  ['Wassalni case study', '/projects/wassalni/', 'Wassalni'],
  ['Divan Hane case study', '/projects/divanhane/', 'Divan Hane'],
  ['Picci case study', '/projects/picci/', 'Picci'],
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

    expect(screen.getByRole('heading', { name: heading, level: 1 })).toBeTruthy();

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

describe('keyboard navigation and language', () => {
  it('opens the mobile menu and closes it with Escape', () => {
    render(<App />);
    const menuButton = screen.getByRole('button', { name: 'Ouvrir le menu' });

    fireEvent.click(menuButton);
    expect(menuButton.getAttribute('aria-expanded')).toBe('true');
    expect(document.getElementById('mobile-navigation')?.hasAttribute('hidden')).toBe(false);

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(menuButton.getAttribute('aria-expanded')).toBe('false');
    expect(document.getElementById('mobile-navigation')?.hasAttribute('hidden')).toBe(true);
  });

  it('synchronizes the selected language with the document language and labels', () => {
    localStorage.setItem('language', 'en');
    render(<App />);

    expect(document.documentElement.lang).toBe('en');
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toBeTruthy();
    expect(document.title).toBe('Imed Eddine Belouettar — Portfolio');
  });
});
