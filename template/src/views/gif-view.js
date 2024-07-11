import { renderFavorite } from '../events/favorites-events.js';
export const toGifsView = (gifs = []) => {
  return `<div class="gifs-container masonry">
            ${
              gifs.map(gif => toSingleGifView(gif)).join('\n') ||
              'empty array of gifs'
            }
         </div>`;
};

export const toSingleGifView = gif => {
  return `
  <div class="gif-item">
    <span>${gif.slug}</span>
    <span class="favorite" data-gif-id="${gif.id}">
      ${renderFavorite(gif.id)}
    </span>
  </div>`;
};
