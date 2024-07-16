/**
 * Generates the HTML string for a success notification view.
 *
 * @function toNotificationSuccessView
 * @param {string} message - The message to display in the notification.
 * @returns {string} The HTML string for the success notification view.
 */
export const toNotificationSuccessView = message => {
  return `
      <div class="notification-content">
          <i class="fa-solid fa-check"></i>
          <div class="notification-message">
              <span class="text text-1">Success</span>
              <span class="text text-2">${message}</span>
          </div>
          <span class="close-notification">&times;</span>
          <div class="progress"></div>
      </div>
      `;
};

/**
 * Generates the HTML string for an error notification view.
 *
 * @function toNotificationErrorView
 * @param {string} message - The message to display in the notification.
 * @returns {string} The HTML string for the error notification view.
 */
export const toNotificationErrorView = message => {
  return `
      <div class="notification-content">
          <i class="fa-solid fa-burst"></i>
          <div class="notification-message">
              <span class="text text-1">Error</span>
              <span class="text text-2">${message}</span>
          </div>
          <span class="close-notification">&times;</span>
          <div class="progress"></div>
      </div>
      `;
};

/**
 * Generates the HTML string for a note notification view.
 *
 * @function toNotificationNoteView
 * @param {string} message - The message to display in the notification.
 * @returns {string} The HTML string for the note notification view.
 */
export const toNotificationNoteView = message => {
  return `
      <div class="notification-content">
          <i class="fa-solid fa-exclamation"></i>
          <div class="notification-message">
              <span class="text text-1">Note</span>
              <span class="text text-2">${message}</span>
          </div>
          <span class="close-notification">&times;</span>
          <div class="progress"></div>
      </div>
      `;
};
