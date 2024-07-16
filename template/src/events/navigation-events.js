import {
  HOME,
  TRENDING,
  FAVORITES,
  UPLOADED,
  UPLOAD,
} from '../common/constants.js';

import { setActiveNav } from '../helpers/event-helpers.js';

import {
  renderHome,
  renderTrending,
  renderFavorites,
  renderUploaded,
  renderUpload,
} from '../events/render-events.js';

/**
 * Loads and renders the specified page of the application.
 * @param {string} [page=''] - The page to be loaded (e.g., HOME, TRENDING, FAVORITES, UPLOADED, UPLOAD).
 * @returns {void}
 */
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
