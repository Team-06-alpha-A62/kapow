export const toGifDetailsView = gif => {
  const width = parseInt(gif.images.original.width, 10);
  const height = parseInt(gif.images.original.height, 10);
  return `
      <div class="modal-gif-content">
        <span class="close-modal">&times;</span>
        <div class="modal-gif-information">
            <img class="modal-gif-img" src="${gif.images.original.url}" alt="${gif.title}" style="width:400px;" />
            <h2>${gif.title}</h2>
            <p>${gif.username}</p>
        </div>
      </div>
    `;
};
