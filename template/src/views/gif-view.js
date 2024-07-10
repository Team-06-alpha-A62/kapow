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
    <span><button class="favorite-button" type="button" data-gif-id="${gif.id}">♡</button></span>
  </div>`;
};
