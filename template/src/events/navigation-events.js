import {
  HOME,
  TRENDING,
  FAVORITES,
  UPLOADED,
  UPLOAD,
  CONTAINER_SELECTOR,
} from '../common/constants.js';

import { setActiveNav } from './helpers.js';
import { toHomeView } from '../views/home-view.js';
import { toTrendingGifsView } from '../views/trending-view.js';
import { loadTrending } from '../services/request-service.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesGifsView } from '../views/favorites-view.js';

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

const renderTrending = async () => {
  const trending = await loadTrending();

  document.querySelector(CONTAINER_SELECTOR).innerHTML =
    toTrendingGifsView(trending);
};

const renderFavorites = () => {
  const favorites = getFavorites();
  console.log(favorites);
  document.querySelector(CONTAINER_SELECTOR).innerHTML =
    toFavoritesGifsView(favorites);
};
