import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from '../data/favorites.js';

import { FULL_HEART, EMPTY_HEART } from '../common/constants.js';

import { toggleHeart } from '../views/helper-views.js';

export const toggleFavorite = gifId => {
  const favorites = getFavorites();
  const favoriteSpan = document.querySelector(`span[data-gif-id="${gifId}"]`);

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }
  favoriteSpan.innerHTML = renderFavorite(gifId);
};

export const renderFavorite = gifId => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? toggleHeart(gifId, FULL_HEART)
    : toggleHeart(gifId, EMPTY_HEART);
};
