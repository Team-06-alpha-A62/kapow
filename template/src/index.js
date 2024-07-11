import { HOME } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { toggleFavorite } from './events/favorites-events.js';
import { renderSearchGifs } from './events/search-events.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', event => {
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }
    console.log(event.target);
    if (event.target.classList.contains('favorite')) {
      toggleFavorite(event.target.getAttribute('data-gif-id'));
    }
  });

  document.querySelector('#search').addEventListener('input', event => {
    renderSearchGifs(event.target.value);
  });

  loadPage(HOME);
});
