import { renderFavorite } from '../events/favorites-events.js';
import { gifOverlayUserInfo, previewUpload } from './view-helpers.js';
import { determineHeight } from './view-helpers.js';
import { heartFavoriteView } from './view-helpers.js';
export const toGifsView = (gifs = []) => {
  return `<div class="gifs-container">
            ${
              gifs
                .map(gif => toSingleGifView(gif, gif.user || null))
                .join('\n') || 'empty array of gifs'
            }
          </div>`;
};

export const toSingleGifView = (gif, user) => {
  const newHeight = determineHeight(gif);
  return `
  <div class="gif-item"  style="height:${newHeight}px;">
    <img  src="${gif.images.original.url}" alt="${gif.title}" class="gif-image">
    <div class="overlay" data-gif-id="${gif.id}">
      <div class="actions">
        ${heartFavoriteView(gif)}
        <div class="copy-button copy-link" data-gif-url="${gif.url}">
          <i class="fa-solid fa-link"></i>
        </div>
      </div>
      ${gifOverlayUserInfo(gif, user)}
    </div>
  </div>`;
};

export const toGifDetailsView = gif => {
  return `
      <div class="modal-gif-content">
        <span class="close-modal">&times;</span>
        <div class="modal-gif">
          <div class="modal-img">
            <img class="modal-gif-img" src="${gif.images.original.url}" alt="${
    gif.title
  }"/>
          </div>
          <div class="gif-information">
            <div class="heading">
              <h2>${gif.title}</h2>
            </div>
            <div class="information">
              ${gif.username ? `<p>User: ${gif.username}</p>` : ''}
              <p>Imported: ${moment(gif.import_datetime).format(
                'MMMM D, YYYY, h:mm:ss A'
              )}</p>
            </div>
            <div class="actions">
              ${heartFavoriteView(gif)}
              <div class="copy-button copy-link" data-gif-url="${gif.url}">
                <i class="fa-solid fa-link"></i>
              </div>
              <a href="${gif.url}">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          </div>
      </div>
    `;
};

export const toUploadGifDetailsView = (gif, previewUrl) => {
  return `
  <div class="modal-gif-content">
    <span class="close-modal">&times;</span>
    <div class="modal-gif">
      <div class="modal-img">
        ${previewUpload(previewUrl)}
      </div>
      <div class="gif-information">
        <h2>${gif.name}</h2>
        <div class="information">
          <p>Size: ${(gif.size / 1000).toFixed()} KB</p>
          <p>File Type: ${gif.type}</p>
        </div>
        <form>
          <button id="submit" type="submit" class="nav-link">Upload</button>
        </form>
      </div>
    </div>
  </div>
`;
};
