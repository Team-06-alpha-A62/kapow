import { loadPage } from '../navigation-events.js';
import { toggleFavorite } from '../favorites-events.js';
import { renderGifDetails, closeGifDetails } from '../gif-details-events.js';
import {
  closeNotification,
  renderNotification,
} from '../notification-events.js';

/**
 * Handles the document click event, performing various actions based on the target element.
 *
 * @function handleDocumentClick
 * @param {MouseEvent} event - The click event triggered by the document.
 * @returns {void}
 */
export const handleDocumentClick = event => {
  const { target } = event;

  if (target.closest('a.nav-link')) {
    loadPage(target.closest('a.nav-link').getAttribute('data-page'));
  }

  if (target.classList.contains('favorite')) {
    toggleFavorite(target.getAttribute('data-gif-id'));
  }

  if (target.classList.contains('close-notification')) {
    closeNotification();
  }

  if (target.classList.contains('fa-link')) {
    navigator.clipboard.writeText(
      target.parentElement.getAttribute('data-gif-url')
    );
    renderNotification('note', 'Gif URL copied successfully.');
  }

  if (target.classList.contains('overlay')) {
    renderGifDetails(target.getAttribute('data-gif-id'));
  }

  if (
    target.classList.contains('close-modal') ||
    target.classList.contains('modal')
  ) {
    closeGifDetails();
  }

  if (target.closest('.to-top')) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};
