import { debounce } from '../event-helpers.js';
import { renderSearchGifs } from '../render-events.js';
import { DEBOUNCE_LIMIT } from '../../common/constants.js';

const debouncedRenderSearchGifs = debounce(renderSearchGifs, DEBOUNCE_LIMIT);
export const handleSearchInput = event => {
  debouncedRenderSearchGifs(event.target.value);

  const activeNavButton = document.querySelector('.nav-link.active');
  if (activeNavButton) activeNavButton.classList.remove('active');
};
