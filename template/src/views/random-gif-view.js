/**
 * Generates an HTML string for displaying a random GIF.
 * @param {Object} gif - The GIF object to be displayed.
 * @returns {string} The HTML string for the random GIF view.
 */
export const toRandomGifView = gif => {
  const width = parseInt(gif.images.original.width, 10);
  const height = parseInt(gif.images.original.height, 10);
  return `
      <h1>Nothing to display here... Enjoy this totally random gif instead.</h1>
      <div>
         <img src="${gif.images.original.url}" alt="${gif.title}" style="width:${width}px; height:${height}px; border-radius:10px;">
      </div>
     `;
};
