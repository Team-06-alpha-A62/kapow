import { HOME } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { toggleFavorite } from './events/favorites-events.js';
import { renderSearchGifs } from './events/search-events.js';
import { debounce } from './events/event-helpers.js';
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

  const debouncedRenderSearchGifs = debounce(renderSearchGifs, 1000);
  document.querySelector('#search').addEventListener('input', event => {
    debouncedRenderSearchGifs(event.target.value);
  });
  document.addEventListener('scroll', function () {
    let toTopButton = document.querySelector('.to-top');
    if (window.scrollY > 50) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }
  });
  document.querySelector('.to-top').addEventListener('click', function (event) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  loadPage(HOME);
});
