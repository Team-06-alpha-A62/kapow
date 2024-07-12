import { HOME, TRENDING, DEBOUNCE_LIMIT } from './common/constants.js';
import { loadPage, loadMore } from './events/navigation-events.js';
import { toggleFavorite } from './events/favorites-events.js';
import { renderSearchGifs } from './events/search-events.js';
import { debounce } from './events/event-helpers.js';

document.addEventListener('DOMContentLoaded', () => {
  const debouncedRenderSearchGifs = debounce(renderSearchGifs, DEBOUNCE_LIMIT);
  const debouncedLoadMore = debounce(loadMore, DEBOUNCE_LIMIT);

  document.addEventListener('click', event => {

    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    if (event.target.classList.contains('favorite')) {
      toggleFavorite(event.target.getAttribute('data-gif-id'));
    }

    if (event.target.parentElement.classList.contains('copy-link')) {
      console.log(event.target.parentElement.getAttribute('data-gif-url'));
      navigator.clipboard.writeText(event.target.getAttribute('data-gif-url'));
    }
  });

  document.querySelector('#search').addEventListener('input', event => {
    debouncedRenderSearchGifs(event.target.value);
  });

  document.addEventListener('scroll', () => {
    let toTopButton = document.querySelector('.to-top');
    if (window.scrollY > 50) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }
    // if end of the document is reached
    if (
      document.documentElement.clientHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50
    ) debouncedLoadMore(TRENDING);
  });

  document.querySelector('.to-top').addEventListener('click', event => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  loadPage(HOME);
});
