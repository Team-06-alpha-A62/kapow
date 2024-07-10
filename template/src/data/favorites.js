let favorites = JSON.parse(localStorage.getItem('favorite')) || [];

export const addFavorite = gifId => {
  if (favorites.find(id => id === gifId)) {
    // Gif has already been added to favorites
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFavorite = gifId => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];
