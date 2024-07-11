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
import { loadTrending } from '../services/request-service.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesGifsView } from '../views/favorites-view.js';
import { loadSingleGif } from '../services/request-service.js';

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
  // const users = trending.map(item => item.user || {});
  // const avatarUrls = users.map(user => user.avatar_url || '');

  document.querySelector(CONTAINER_SELECTOR).innerHTML =
    toTrendingGifsView(trending);

  new window.Masonry(CONTAINER_SELECTOR, {
    itemSelector: '.gif-item',
    columnWidth: 256,
    gutter: 10,
  });

  // document.querySelector(CONTAINER_SELECTOR).innerHTML = toTrendingGifsView(trending);
};

const renderFavorites = async () => {
  const favorites = await Promise.all(
    getFavorites().map(favorite => loadSingleGif(favorite))
  );

  document.querySelector(CONTAINER_SELECTOR).innerHTML =
    toFavoritesGifsView(favorites);

  new window.Masonry(CONTAINER_SELECTOR, {
    itemSelector: '.gif-item',
    columnWidth: 256,
    gutter: 10,
  });
};
