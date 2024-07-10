export const toGifsView = (gifs = []) => {
  return `<div class="gifs-container masonry">
            ${
              gifs.map(gif => toSingleGifView(gif)).join('\n') ||
              'empty array of gifs'
            }
         </div>`;
};

export const toSingleGifView = gif => {
  return `<div class="gif-item">Gif</div>`;
};
