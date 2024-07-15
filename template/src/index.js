import { HOME } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { handleDocumentClick } from './events/handlers/click-handlers.js';
import { handleDocumentKeyUp } from './events/handlers/key-up-handlers.js';
import { handleSearchInput } from './events/handlers/search-handlers.js';
import { handleDocumentScroll } from './events/handlers/scroll-handlers.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keyup', handleDocumentKeyUp);
  document
    .querySelector('#search')
    .addEventListener('input', handleSearchInput);
  document.addEventListener('scroll', handleDocumentScroll);

  loadPage(HOME);
});
