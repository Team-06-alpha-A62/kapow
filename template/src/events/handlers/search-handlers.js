import { debounce } from '../../helpers/event-helpers.js';
import { renderSearchGifs } from '../render-events.js';
import { DEBOUNCE_LIMIT } from '../../common/constants.js';

const debouncedRenderSearchGifs = debounce(renderSearchGifs, DEBOUNCE_LIMIT);

/**
 * Handles the search input event, debouncing the rendering of search GIFs and updating the active navigation button.
 *
 * @function handleSearchInput
 * @param {Event} event - The input event triggered by the search input field.
 * @returns {void}
 */
export const handleSearchInput = event => {
  debouncedRenderSearchGifs(event.target.value);

  const activeNavButton = document.querySelector('.nav-link.active');
  if (activeNavButton) activeNavButton.classList.remove('active');
};
