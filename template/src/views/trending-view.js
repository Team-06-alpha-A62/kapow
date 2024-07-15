import { toGifsView } from './gif-view.js';

/**
 * Generates an HTML string for displaying a view of trending GIFs.
 * @param {Array} gifs - An array of trending GIF objects to be displayed.
 * @returns {string} The HTML string for the trending GIFs view.
 */
export const toTrendingGifsView = gifs => `
  <div class="content">
    ${toGifsView(gifs)}
  </div>`;
