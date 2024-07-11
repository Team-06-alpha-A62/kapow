import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchGifs } from '../services/request-service.js';
import { toSearchGifView } from '../views/search-view.js';

export const renderSearchGifs = async searchTerm => {
  const gifs = await loadSearchGifs(searchTerm);
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toSearchGifView(
    gifs,
    searchTerm
  );
};
