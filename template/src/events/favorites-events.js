import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from '../data/favorites.js';

import { FULL_HEART, EMPTY_HEART } from '../common/constants.js';

import { toggleHeart } from '../views/view-helpers.js';

/**
 * Toggles the favorite status of a GIF and updates the heart icon accordingly.
 * @param {string} gifId - The ID of the GIF to be toggled as favorite.
 */
export const toggleFavorite = gifId => {
  const favorites = getFavorites();
  const favoriteSpans = document.querySelectorAll(
    `div.heart-button.favorite[data-gif-id="${gifId}"]`
  );

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }
  favoriteSpans.forEach(span => {
    span.innerHTML = renderFavorite(gifId);
  });
};

/**
 * Renders the heart icon based on whether the GIF is a favorite.
 * @param {string} gifId - The ID of the GIF to render the favorite heart icon for.
 * @returns {string} The HTML string for the heart icon.
 */
export const renderFavorite = gifId => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? toggleHeart(gifId, FULL_HEART)
    : toggleHeart(gifId, EMPTY_HEART);
};
