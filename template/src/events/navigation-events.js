import {
  HOME,
  TRENDING,
  FAVORITES,
  UPLOADED,
  UPLOAD,
  CONTAINER_SELECTOR,
} from '../common/constants.js';

import { setActiveNav } from './event-helpers.js';
import { toHomeView } from '../views/home-view.js';
import { toTrendingGifsView } from '../views/trending-view.js';
import { loadRandomGif, loadTrending } from '../services/request-service.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesGifsView } from '../views/favorites-view.js';
import { loadSingleGif } from '../services/request-service.js';
import { toRandomGifView } from '../views/random-gif-view.js';

export const loadPage = (page = '') => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case UPLOADED:
      setActiveNav(UPLOADED);
      return renderUploaded();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();

    default:
      return null;
  }
};

const renderHome = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

export const renderTrending = async () => {
  const trending = await loadTrending();

  document.querySelector(CONTAINER_SELECTOR).innerHTML =
    toTrendingGifsView(trending);

  new window.Masonry(CONTAINER_SELECTOR, {
    itemSelector: '.gif-item',
    columnWidth: 256,
    gutter: 10,
  });
};

const renderFavorites = async () => {
  const favorites = await Promise.all(
    getFavorites().map(favorite => loadSingleGif(favorite))
  );

  if (favorites.length === 0) {
    renderRandomGif();
  } else {
    document.querySelector(CONTAINER_SELECTOR).innerHTML =
      toFavoritesGifsView(favorites);
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
