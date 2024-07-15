import { closeGifDetails } from '../gif-details-events.js';

export const handleDocumentKeyUp = event => {
  if (event.keyCode === 27) {
    closeGifDetails();
  }
};
