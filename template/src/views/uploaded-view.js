import { toGifsView } from './gif-view.js';

/**
 * Generates an HTML string for displaying a view of uploaded GIFs.
 * @param {Array} gifs - An array of GIF objects to be displayed.
 * @returns {string} The HTML string for the uploaded GIFs view.
 */
export const toUploadedGifsView = gifs => `
  <div class="content">
    ${toGifsView(gifs)}
  </div>`;
