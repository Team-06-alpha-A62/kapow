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

import {
  closeNotification,
  renderNotification,
} from './events/notification-events.js';

document.addEventListener('DOMContentLoaded', () => {
  // Debounced versions of functions to limit the rate at which they are called
  const debouncedRenderSearchGifs = debounce(renderSearchGifs, DEBOUNCE_LIMIT);
  const debouncedRenderMore = debounce(renderMore, DEBOUNCE_LIMIT);

  /**
   * Event listener for click events on the document.
   * Handles various click actions based on the target element.
   */
  document.addEventListener('click', event => {
    // Navigate to different pages
    if (event.target.closest('a.nav-link')) {
      loadPage(event.target.closest('a.nav-link').getAttribute('data-page'));
    }

    // Toggle favorite status of a GIF
    if (event.target.classList.contains('favorite')) {
      toggleFavorite(event.target.getAttribute('data-gif-id'));
    }

    if (event.target.classList.contains('close-notification')) {
      closeNotification();
    }

    // Copy GIF URL to clipboard
    if (event.target.classList.contains('fa-link')) {
      navigator.clipboard.writeText(
        event.target.parentElement.getAttribute('data-gif-url')
      );
      renderNotification('note', 'Gif URL coppied successfully.');
    }

    // Render GIF details in a modal
    if (event.target.classList.contains('overlay')) {
      renderGifDetails(event.target.getAttribute('data-gif-id'));
    }

    // Close the GIF details modal
    if (
      event.target.classList.contains('close-modal') ||
      event.target.classList.contains('modal')
    ) {
      closeGifDetails();
    }
  });

  /**
   * Event listener for keyup events on the document.
   * Closes the GIF details modal when the Escape key is pressed.
   */
  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 27) {
      // 27 is the code for the Escape key
      closeGifDetails();
    }
  });

  /**
   * Event listener for input events on the search box.
   * Triggers a debounced search function and updates navigation button states.
   */
  document.querySelector('#search').addEventListener('input', event => {
    debouncedRenderSearchGifs(event.target.value);

    // Remove 'active' class from currently active navigation button
    const navButtons = [...document.querySelectorAll('.nav-link')];
    const activeNavButton = navButtons.find(btn =>
      btn.classList.contains('active')
    );
    if (activeNavButton) activeNavButton.classList.remove('active');
  });

  /**
   * Event listener for scroll events on the document.
   * Shows or hides the "to top" button and triggers the debounced render more function
   * when the user reaches the bottom of the page.
   */
  document.addEventListener('scroll', () => {
    const toTopButton = document.querySelector('.to-top');
    if (window.scrollY > 50) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }

    // Check if the end of the document is reached
    if (
      document.documentElement.clientHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50
    ) {
      debouncedRenderMore();
    }
  });

  /**
   * Event listener for click events on the "to top" button.
   * Smoothly scrolls the window to the top.
   */
  document.querySelector('.to-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Load the initial page content
  loadPage(HOME);
});
