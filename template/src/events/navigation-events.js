import {
  HOME,
  TRENDING,
  FAVORITES,
  UPLOADED,
  UPLOAD,
  CONTAINER_SELECTOR,
} from '../common/constants.js';

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
