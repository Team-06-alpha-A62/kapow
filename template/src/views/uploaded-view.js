import { toGifsView } from './gif-view.js';

export const toUploadedGifsView = gifs => `
  <div class="content">
    ${toGifsView(gifs)}
  </div>`; // or call randomGif if empty