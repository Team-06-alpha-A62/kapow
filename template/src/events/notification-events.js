import { loadNotification } from '../helpers/event-helpers.js';

/**
 * Renders a notification on the screen.
 *
 * @function
 * @param {string} type - The type of the notification (e.g., 'success', 'error').
 * @param {string} message - The message to be displayed in the notification.
 */
export const renderNotification = (type, message) => {
  const notification = document.querySelector('.notification');
  notification.innerHTML = loadNotification(type, message);
  notification.classList.add('active');
  setTimeout(closeNotification, 5000);
};

/**
 * Closes the currently active notification.
 *
 * @function
 */
export const closeNotification = () => {
  const notification = document.querySelector('.notification');
  notification.classList.remove('active');
};
