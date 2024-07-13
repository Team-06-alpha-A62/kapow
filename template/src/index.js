import { HOME, UPLOAD, DEBOUNCE_LIMIT } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { renderMore } from './events/render-events.js';
import { toggleFavorite } from './events/favorites-events.js';
import { renderSearchGifs } from './events/render-events.js';
import { debounce } from './events/event-helpers.js';
import {
  renderGifDetails,
  closeGifDetails,
} from './events/gif-details-events.js';
import { uploadGif } from './events/upload-events.js';

document.addEventListener('DOMContentLoaded', () => {
  const debouncedRenderSearchGifs = debounce(renderSearchGifs, DEBOUNCE_LIMIT);
  const debouncedRenderMore = debounce(renderMore, DEBOUNCE_LIMIT);

  document.addEventListener('click', event => {
    if (event.target.closest('a.nav-link')) {
      loadPage(event.target.closest('a.nav-link').getAttribute('data-page'));
    }

    if (event.target.classList.contains('favorite')) {
      console.log(event.target);
      toggleFavorite(event.target.getAttribute('data-gif-id'));
    }

    if (event.target.parentElement.classList.contains('copy-link')) {
      navigator.clipboard.writeText(
        event.target.parentElement.getAttribute('data-gif-url')
      );
    }

    if (event.target.classList.contains('overlay')) {
      renderGifDetails(event.target.getAttribute('data-gif-id'));
    }

    if (event.target.classList.contains('close-modal')) {
      closeGifDetails();
    }
  });

  document.querySelector('#search').addEventListener('input', event => {
    debouncedRenderSearchGifs(event.target.value);
    const navButtons = [...document.querySelectorAll('.nav-link')];
    const activeNavButton = navButtons.find(btn =>
      btn.classList.contains('active')
    );
    if (activeNavButton) activeNavButton.classList.remove('active');
  });

  document.addEventListener('scroll', () => {
    let toTopButton = document.querySelector('.to-top');
    if (window.scrollY > 50) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }
    // if end of the document is reached
    if (
      document.documentElement.clientHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50
    )
      debouncedRenderMore();
  });

  document.querySelector('.to-top').addEventListener('click', event => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  document.addEventListener('submit', async event => {
    event.preventDefault(); // prevent from reloading the page
    // add error handling if uploaded file is not a gif
    const fileInput = document.querySelector('#fileInput').files[0];
    console.log(fileInput.files); // returns a fileList (arrayLike)
    if (!fileInput) {
      console.error('no file selected');
      return;
    }
    // add error handling if there's no file uploaded
    try {
      await uploadGif(fileInput);
      console.log('Gif uploaded Successfully!');
    } catch (error) {
      console.error(error);
    }
  })

  loadPage(UPLOAD);
});
