import { CONTAINER_SELECTOR, INITIAL_DISPLAY_LIMIT, ADDITIONAL_DISPLAY_LIMIT } from '../common/constants.js';
import { toSearchGifView } from '../views/search-view.js';
import { toHomeView } from '../views/home-view.js';
import { toTrendingGifsView } from '../views/trending-view.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesGifsView } from '../views/favorites-view.js';
import { toRandomGifView } from '../views/random-gif-view.js';
import { toSingleGifView } from '../views/gif-view.js';
import {
  loadRandomGif,
  loadTrending,
  loadSearchGifs,
  loadSingleGif,
} from '../services/request-service.js';

let gifs = [];

export const renderSearchGifs = async searchTerm => {
  gifs = await loadSearchGifs(searchTerm);

  const searchGifsToDisplay = gifs.slice(0, INITIAL_DISPLAY_LIMIT + 1);
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toSearchGifView(
    searchGifsToDisplay,
    searchTerm
  );
  new window.Masonry(CONTAINER_SELECTOR, {
    itemSelector: '.gif-item',
    columnWidth: 256,
    gutter: 10,
  });
};

export const renderMore = () => {
  const gifsContainer = document.querySelector('.gifs-container');
  const numberOfGifsDisplayed = gifsContainer.children.length;
  const gifsBatch = gifs
    .slice(numberOfGifsDisplayed, numberOfGifsDisplayed + ADDITIONAL_DISPLAY_LIMIT + 1)
    .map(gif => toSingleGifView(gif, gif.user || null))
    .join('\n');

  gifsContainer.innerHTML += gifsBatch;

  new window.Masonry(CONTAINER_SELECTOR, {
    itemSelector: '.gif-item',
    columnWidth: 256,
    gutter: 10,
  });
};

export const renderHome = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

export const renderTrending = async () => {
  gifs = await loadTrending();
  const trendingGifsToDisplay = gifs.slice(0, INITIAL_DISPLAY_LIMIT + 1);

  document.querySelector(CONTAINER_SELECTOR).innerHTML = toTrendingGifsView(
    trendingGifsToDisplay
  );

  new window.Masonry(CONTAINER_SELECTOR, {
    itemSelector: '.gif-item',
    columnWidth: 256,
    gutter: 10,
  });
};

export const renderFavorites = async () => {
  gifs = await Promise.all(
    getFavorites().map(favorite => loadSingleGif(favorite))
  );

  if (gifs.length === 0) {
    renderRandomGif();
  } else {
    const favoritesToDisplay = gifs.slice(0, INITIAL_DISPLAY_LIMIT + 1);
    document.querySelector(CONTAINER_SELECTOR).innerHTML =
      toFavoritesGifsView(favoritesToDisplay);
  }

  new window.Masonry(CONTAINER_SELECTOR, {
    itemSelector: '.gif-item',
    columnWidth: 256,
    gutter: 10,
  });
};

const renderRandomGif = async () => {
  const randomGif = await loadRandomGif();
  document.querySelector(CONTAINER_SELECTOR).innerHTML =
    toRandomGifView(randomGif);
};