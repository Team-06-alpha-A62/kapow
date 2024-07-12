import { toGifsView, toSingleGifView } from './gif-view.js';

export const toSearchGifView = (gifs, searchTerm) => `
  <div class="content">
    <div class="search-container">
      <h1>${searchTerm ? `Gifs found for "${searchTerm}"` : ''}</h1>
      ${toGifsView(gifs)}
    </div>
  </div>`;
