import { toGifsView } from './gif-view.js';

export const toFavoritesGifsView = gifs => `
  <div class="content">
    ${toGifsView(gifs)}
  </div>`; // or call randomGif if empty
