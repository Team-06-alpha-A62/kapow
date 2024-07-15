import { renderUploadGifDetails } from './gif-details-events.js';
import {
  toNotificationSuccessView,
  toNotificationErrorView,
  toNotificationNoteView,
} from '../views/notification-view.js';

/**
 * Sets the active navigation button based on the current page.
 * @param {string} page - The current page to be set as active.
 */
export const setActiveNav = page => {
  const navButtons = document.querySelectorAll('.btn');
  [...navButtons].forEach(btn =>
    btn.getAttribute('data-page') === page
      ? btn.classList.add('active')
      : btn.classList.remove('active')
  );
};

/**
 * Creates a debounced version of a function that delays its execution.
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} A debounced version of the input function.
 */
export const debounce = (func, delay) => {
  let debounceTimer;
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
};

/**
 * Converts a file to a data URL.
 * @param {File} file - The file to convert.
 * @returns {Promise<string>} A promise that resolves to the data URL of the file.
 */
export const getDataURL = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      resolve(event.target.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

/**
 * Handles the processing of a file, including validation and rendering upload GIF details.
 * @param {File} file - The file to be processed.
 * @returns {Promise<void>}
 */
export const handleFile = async file => {
  if (
    file.type !== 'image/gif' &&
    file.type !== 'video/mp4' &&
    file.type !== 'video/quicktime' &&
    file.type !== 'video/webm'
  ) {
    throw new Error('Invalid file type');
  }
  const previewUrl = file.type === 'image/gif' ? await getDataURL(file) : null;
  await renderUploadGifDetails(file, previewUrl);
};

export const loadNotification = (type, message) => {
  switch (type) {
  case 'note':
    return toNotificationNoteView(message);
  case 'success':
    return toNotificationSuccessView(message);
  case 'error':
    return toNotificationErrorView(message);
  default:
    throw new Error('Type is not recognized.');
  }
};
