import { toGifsView } from './gif-view.js';

export const toFavoritesGifsView = gifs => {
  return `
    <div class ="favorites-container">
      ${toGifsView(gifs)}
    </div>`;
};
