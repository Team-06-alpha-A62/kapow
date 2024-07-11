import { toGifsView } from './gif-view.js';

export const toTrendingGifsView = gifs => `
  <div class="content">
    ${toGifsView(gifs)}
  </div>`;
