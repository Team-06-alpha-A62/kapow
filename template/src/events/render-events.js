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
import { handleFile } from './event-helpers.js';
import { closeGifDetails } from './gif-details-events.js';

let gifs = [];

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

export const renderHome = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

export const renderTrending = async () => {
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
};

export const renderFavorites = async () => {
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
};

export const renderUploaded = async () => {
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
};

const renderRandomGif = async () => {
  const randomGif = await loadRandomGif();
  document.querySelector(CONTAINER_SELECTOR).innerHTML =
    toRandomGifView(randomGif);
};

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
      event.preventDefault();
      document.querySelector('#file-label').classList.remove('active');
      try {
        const fileList = event.dataTransfer.files;

        const fileInput = document.querySelector('#file-input');
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(fileList[0]);
        fileInput.files = dataTransfer.files;
        const file = fileInput.files[0]
        if (fileInput.length > 1) {
          throw new Error("Can't select more than one file");
        }
        await handleFile(file);
      } catch (error) {
        console.error(`Could not upload file: ${error.message}`);
      }
    });

  document
    .querySelector('#file-input')
    .addEventListener('change', async event => {
      try {
        const fileInput = event.target.files;
        if (fileInput.length > 1) {
          throw new Error("Can't select more than one file");
        }
        await handleFile(fileInput[0]);
      } catch (error) {
        console.error(`Could not upload file: ${error.message}`);
      }
    });

  document.addEventListener('submit', async event => {
    event.preventDefault();
    const fileInput = document.querySelector('#file-input').files[0];
    const submitButton = document.querySelector('#submit');
    submitButton.textContent = 'Processing...';
    submitButton.classList.add('processing');
    submitButton.disabled = true;
    try {
      await uploadGif(fileInput);
      alert('Gif uploaded Successfully!');
      closeGifDetails();
    } catch (error) {
      console.error(error);
    }
  }, {
    once: true
  });
};
