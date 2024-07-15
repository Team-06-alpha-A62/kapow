let favorites = JSON.parse(localStorage.getItem('favorite')) || [];

/**
 * Adds a GIF ID to the favorites list in local storage if it doesn't already exist.
 * @param {string} gifId - The ID of the GIF to be added to favorites.
 */
export const addFavorite = gifId => {
  if (favorites.find(id => id === gifId)) {
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes a GIF ID from the favorites list in local storage.
 * @param {string} gifId - The ID of the GIF to be removed from favorites.
 */
export const removeFavorite = gifId => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Retrieves the list of favorite GIF IDs from the local storage.
 * @returns {Array<string>} An array of favorite GIF IDs.
 */
export const getFavorites = () => [...favorites];
