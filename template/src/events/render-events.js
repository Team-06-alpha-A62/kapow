import {
  CONTAINER_SELECTOR,
  INITIAL_DISPLAY_LIMIT,
  ADDITIONAL_DISPLAY_LIMIT,
} from '../common/constants.js';
import { toSearchGifView } from '../views/search-view.js';
import { toHomeView } from '../views/home-view.js';
import { toTrendingGifsView } from '../views/trending-view.js';
import { getFavorites } from '../data/favorites.js';
import { getUploaded } from '../data/uploaded.js';
import { toFavoritesGifsView } from '../views/favorites-view.js';
import { toRandomGifView } from '../views/random-gif-view.js';
import { toSingleGifView } from '../views/gif-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toUploadedGifsView } from '../views/uploaded-view.js';
import { uploadGif } from './upload-events.js';
import {
  loadRandomGif,
  loadTrending,
  loadSearchGifs,
  loadSingleGif,
} from '../services/request-service.js';
import { handleFile } from '../helpers/event-helpers.js';
import { closeGifDetails } from './gif-details-events.js';
import { renderNotification } from './notification-events.js';

let gifs = [];

/**
 * Renders the search results view for GIFs based on a search term.
 * @param {string} searchTerm - The search term used to find GIFs.
 * @returns {Promise<void>}
 */
export const renderSearchGifs = async searchTerm => {
  gifs = await loadSearchGifs(searchTerm);

  const searchGifsToDisplay = gifs.slice(0, INITIAL_DISPLAY_LIMIT + 1);
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toSearchGifView(
    searchGifsToDisplay,
    searchTerm
  );
  new window.Masonry(CONTAINER_SELECTOR, {
    itemSelector: '.gif-item',
    columnWidth: 256,
    gutter: 10,
  });
};

/**
 * Renders more GIFs in the current view.
 */
export const renderMore = () => {
  const gifsContainer = document.querySelector('.gifs-container');
  const numberOfGifsDisplayed = gifsContainer?.children?.length;
  const gifsBatch = gifs
    .slice(
      numberOfGifsDisplayed,
      numberOfGifsDisplayed + ADDITIONAL_DISPLAY_LIMIT + 1
    )
    .map(gif => toSingleGifView(gif, gif.user || null))
    .join('\n');

  gifsContainer.innerHTML += gifsBatch;

  new window.Masonry(CONTAINER_SELECTOR, {
    itemSelector: '.gif-item',
    columnWidth: 256,
    gutter: 10,
  });
};

/**
 * Renders the home view.
 */
export const renderHome = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

/**
 * Renders the trending GIFs view.
 * @returns {Promise<void>}
 */
export const renderTrending = async () => {
  try {
    gifs = await loadTrending();
    const trendingGifsToDisplay = gifs.slice(0, INITIAL_DISPLAY_LIMIT + 1);

    document.querySelector(CONTAINER_SELECTOR).innerHTML = toTrendingGifsView(
      trendingGifsToDisplay
    );

    new window.Masonry(CONTAINER_SELECTOR, {
      itemSelector: '.gif-item',
      columnWidth: 256,
      gutter: 10,
    });
  } catch (error) {
    renderNotification('error', error.message);
  }
};

/**
 * Renders the favorites GIFs view.
 * @returns {Promise<void>}
 */
export const renderFavorites = async () => {
  try {
    gifs = await Promise.all(
      getFavorites().map(favorite => loadSingleGif(favorite))
    );

    if (gifs.length === 0) {
      renderRandomGif();
    } else {
      const favoritesToDisplay = gifs.slice(0, INITIAL_DISPLAY_LIMIT + 1);
      document.querySelector(CONTAINER_SELECTOR).innerHTML =
        toFavoritesGifsView(favoritesToDisplay);
    }

    new window.Masonry(CONTAINER_SELECTOR, {
      itemSelector: '.gif-item',
      columnWidth: 256,
      gutter: 10,
    });
  } catch (error) {
    renderNotification('error', error.message);
  }
};

/**
 * Renders the uploaded GIFs view.
 * @returns {Promise<void>}
 */
export const renderUploaded = async () => {
  try {
    gifs = await Promise.all(
      getUploaded().map(uploadedGif => loadSingleGif(uploadedGif))
    );

    if (gifs.length === 0) {
      renderRandomGif();
    } else {
      const uploadedGifsToDisplay = gifs.slice(0, INITIAL_DISPLAY_LIMIT + 1);
      document.querySelector(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView(
        uploadedGifsToDisplay
      );
    }

    new window.Masonry(CONTAINER_SELECTOR, {
      itemSelector: '.gif-item',
      columnWidth: 256,
      gutter: 10,
    });
  } catch (error) {
    renderNotification('error', error.message);
  }
};

/**
 * Renders a random GIF view if no favorites or uploaded GIFs are found.
 * @returns {Promise<void>}
 */
const renderRandomGif = async () => {
  try {
    const randomGif = await loadRandomGif();
    document.querySelector(CONTAINER_SELECTOR).innerHTML =
      toRandomGifView(randomGif);
  } catch (error) {
    renderNotification('error', error.message);
  }
};

/**
 * Renders the upload view and sets up event listeners for file upload actions.
 */
export const renderUpload = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toUploadView();

  document.addEventListener('dragover', event => {
    event.preventDefault();
    document.querySelector('#file-label').classList.add('active');
  });

  document.addEventListener('dragleave', event => {
    event.preventDefault();
    document.querySelector('#file-label').classList.remove('active');
  });

  document
    .querySelector('#file-label')
    .addEventListener('drop', async event => {
      try {
        event.preventDefault();
        document.querySelector('#file-label').classList.remove('active');
        const fileList = event.dataTransfer.files;

        const fileInput = document.querySelector('#file-input');
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(fileList[0]);
        fileInput.files = dataTransfer.files;
        const file = fileInput.files[0];
        if (fileInput.length > 1) {
          throw new Error('Can\'t select more than one file');
        }
        await handleFile(file);
      } catch (error) {
        renderNotification('error', error.message);
      }
    });

  document
    .querySelector('#file-input')
    .addEventListener('change', async event => {
      try {
        const fileInput = event.target.files;
        if (fileInput.length > 1) {
          throw new Error('Can\'t select more than one file');
        }
        await handleFile(fileInput[0]);
      } catch (error) {
        renderNotification('error', error.message);
      }
    });

  document.addEventListener(
    'submit',
    async event => {
      try {
        event.preventDefault();
        const fileInput = document.querySelector('#file-input').files[0];
        const submitButton = document.querySelector('#submit');
        submitButton.textContent = 'Processing...';
        submitButton.classList.add('processing');
        submitButton.disabled = true;
        await uploadGif(fileInput);
        closeGifDetails();
      } catch (error) {
        renderNotification('error', error.message);
      }
    },
    {
      once: true,
    }
  );
};
