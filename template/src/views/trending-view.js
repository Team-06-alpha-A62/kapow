import { toGifsView } from './gif-view.js';

export const toTrendingGifsView = gifs => {
  return `
    <div class = "trending-container">
      ${toGifsView(gifs)}
    </div>`;
};
