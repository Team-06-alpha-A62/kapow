import { debounce } from '../../helpers/event-helpers.js';
import { renderMore } from '../render-events.js';
import { DEBOUNCE_LIMIT } from '../../common/constants.js';

const debouncedRenderMore = debounce(renderMore, DEBOUNCE_LIMIT);

/**
 * Handles the document scroll event, showing or hiding the "to-top" button and triggering the debounced renderMore function when nearing the bottom of the page.
 *
 * @function handleDocumentScroll
 * @returns {void}
 */
export const handleDocumentScroll = () => {
  const toTopButton = document.querySelector('.to-top');

  if (window.scrollY > 50) {
    toTopButton.classList.add('show');
  } else {
    toTopButton.classList.remove('show');
  }

  if (
    document.documentElement.clientHeight + window.scrollY >=
    document.documentElement.scrollHeight - 50
  ) {
    debouncedRenderMore();
  }
};
