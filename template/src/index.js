import { HOME } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { toggleFavorite } from './events/favorites-events.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', event => {
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    if (event.target.classList.contains('favorite-button')) {
      toggleFavorite(event.target.getAttribute('data-gif-id'));
    }
  });
  loadPage(HOME);
});
