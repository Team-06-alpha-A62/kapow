import { toGifsView } from './gif-view.js';

/**
 * Generates an HTML string for displaying a view of favorite GIFs.
 * @param {Array} gifs - An array of favorite GIF objects to be displayed.
 * @returns {string} The HTML string for the favorite GIFs view.
 */
export const toFavoritesGifsView = gifs => `
  <div class="content">
    ${toGifsView(gifs)}
  </div>`;
