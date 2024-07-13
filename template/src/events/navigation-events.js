import {
  HOME,
  TRENDING,
  FAVORITES,
  UPLOADED,
  UPLOAD,
} from '../common/constants.js';

import { setActiveNav } from './event-helpers.js';

import {
  renderHome,
  renderTrending,
  renderFavorites,
  // renderUploaded,
  renderUpload
} from '../events/render-events.js'

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

    // case UPLOADED:
      // setActiveNav(UPLOADED);
      // return renderUploaded();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();

    default:
      return null;
  }
};
