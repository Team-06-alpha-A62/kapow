import { toGifsView } from './gif-view.js';

export const toFavoritesGifsView = gifs => `${toGifsView(gifs)}`; // or call randomGif if empty
