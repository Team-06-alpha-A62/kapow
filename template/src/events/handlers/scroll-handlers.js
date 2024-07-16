import { debounce } from '../../helpers/event-helpers.js';
import { renderMore } from '../render-events.js';
import { DEBOUNCE_LIMIT } from '../../common/constants.js';
import { PX_TO_TRIGGER_TOTOP_BUTTON, PX_TO_TRIGGER_LOAD_MORE} from '../../common/constants.js';

const debouncedRenderMore = debounce(renderMore, DEBOUNCE_LIMIT);

/**
 * Handles the document scroll event, showing or hiding the "to-top" button and triggering the debounced renderMore function when nearing the bottom of the page.
 *
 * @function handleDocumentScroll
 * @returns {void}
 */
export const handleDocumentScroll = () => {
  const toTopButton = document.querySelector('.to-top');

  if (window.scrollY > PX_TO_TRIGGER_TOTOP_BUTTON) {
    toTopButton.classList.add('show');
  } else {
    toTopButton.classList.remove('show');
  }

  if (
    document.documentElement.clientHeight + window.scrollY >=
    document.documentElement.scrollHeight - PX_TO_TRIGGER_LOAD_MORE
  ) {
    debouncedRenderMore();
  }
};
