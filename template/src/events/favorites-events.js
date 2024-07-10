import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from '../data/favorites.js';

export const toggleFavorite = gifId => {
  const favorites = getFavorites();

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }
};
