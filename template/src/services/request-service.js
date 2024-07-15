import { API_KEY, BASE_URL, UPLOAD_URL } from '../common/apiConfig.js';
import { fetchData } from '../helpers/fetch-data-helpers.js';

/**
 * Fetches trending GIFs from the Giphy API.
 * @returns {Promise<Array>} A promise that resolves to an array of trending GIF objects.
 */
export const loadTrending = () => {
  return fetchData(`${BASE_URL}/trending?api_key=${API_KEY}`);
};

/**
 * Fetches a single GIF by its ID from the Giphy API.
 * @param {string} id - The ID of the GIF to be fetched.
 * @returns {Promise<Object>} A promise that resolves to a GIF object.
 */
export const loadSingleGif = id => {
  return fetchData(`${BASE_URL}/${id}?api_key=${API_KEY}`);
};

/**
 * Fetches GIFs based on a search term from the Giphy API.
 * @param {string} searchTerm - The search term used to find GIFs.
 * @returns {Promise<Array>} A promise that resolves to an array of GIF objects matching the search term.
 */
export const loadSearchGifs = (searchTerm = '') => {
  return fetchData(`${BASE_URL}/search?api_key=${API_KEY}&q=${searchTerm}`);
};

/**
 * Fetches a random GIF from the Giphy API.
 * @returns {Promise<Object>} A promise that resolves to a random GIF object.
 */
export const loadRandomGif = () => {
  return fetchData(`${BASE_URL}/random?api_key=${API_KEY}`);
};

/**
 * Uploads a GIF to the Giphy API.
 * @param {FormData} body - The form data containing the GIF file to be uploaded.
 * @returns {Promise<Object|string>} A promise that resolves to the uploaded GIF object, or an error message if the upload fails.
 */
export const loadUploadGif = body => {
  return fetchData(`${UPLOAD_URL}?api_key=${API_KEY}`, {
    method: 'POST',
    body,
  });
};
