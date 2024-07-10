import { toGifsView } from './gif-view.js';

export const trendingGifsView = gifs => {
  return `${toGifsView(gifs)}`;
};
