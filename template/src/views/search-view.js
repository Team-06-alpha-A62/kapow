import { toGifsView } from './gif-view.js';

/**
 * Generates an HTML string for displaying a view of GIF search results.
 * @param {Array} gifs - An array of GIF objects to be displayed.
 * @param {string} searchTerm - The search term used to find the GIFs.
 * @returns {string} The HTML string for the search results view.
 */
export const toSearchGifView = (gifs, searchTerm) => `
  <div class="content">
    <div class="search-container">
      <h1>${searchTerm ? `Gifs found for "${searchTerm}"` : ''}</h1>
      ${toGifsView(gifs)}
    </div>
  </div>`;
