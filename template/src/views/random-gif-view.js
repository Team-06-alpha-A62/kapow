export const toRandomGifView = gif => {
  const width = parseInt(gif.images.original.width, 10);
  const height = parseInt(gif.images.original.height, 10);
  return `
     <h1>No favorite gifs added. Enjoy this random gif.</h1>
     <div>
        <img src="${gif.images.original.url}" alt="${gif.title}" style="width:${width}px; height:${height}px" ">
     </div>
    </div>
    `;
};
