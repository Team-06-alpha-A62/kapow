import { closeGifDetails } from '../gif-details-events.js';

/**
 * Handles the document keyup event, closing the GIF details if the Escape key (key code 27) is pressed.
 *
 * @function handleDocumentKeyUp
 * @param {KeyboardEvent} event - The keyup event triggered by the document.
 * @returns {void}
 */
export const handleDocumentKeyUp = event => {
  if (event.keyCode === 27) {
    closeGifDetails();
  }
};
