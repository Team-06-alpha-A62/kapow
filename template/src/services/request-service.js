//const API_KEY = 'FeFboweua5M9OT2rymbqjhh8DVsXxvxJ';
const API_KEY = 'eb7zm6ySTzlB7D1yeWX7Zu6KJDECrPPM';

/**
 * Fetches trending GIFs from the Giphy API.
 * @returns {Promise<Array>} A promise that resolves to an array of trending GIF objects.
 */
export const loadTrending = async () => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
    );
    const { data } = await response.json();
    return data;
  } catch {
    throw new Error('Could not load gifs.');
  }
};

/**
 * Fetches a single GIF by its ID from the Giphy API.
 * @param {string} id - The ID of the GIF to be fetched.
 * @returns {Promise<Object>} A promise that resolves to a GIF object.
 */
export const loadSingleGif = async id => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
    );
    const { data } = await response.json();
    return data;
  } catch {
    throw new Error('Could not load gif.');
  }
};

/**
 * Fetches GIFs based on a search term from the Giphy API.
 * @param {string} searchTerm - The search term used to find GIFs.
 * @returns {Promise<Array>} A promise that resolves to an array of GIF objects matching the search term.
 */
export const loadSearchGifs = async (searchTerm = '') => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}`
    );
    const { data } = await response.json();
    return data;
  } catch {
    throw new Error('Could not load gifs.');
  }
};

/**
 * Fetches a random GIF from the Giphy API.
 * @returns {Promise<Object>} A promise that resolves to a random GIF object.
 */
export const loadRandomGif = async () => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const { data } = await response.json();
    return data;
  } catch {
    throw new Error('Could not load random gif.');
  }
};

/**
 * Uploads a GIF to the Giphy API.
 * @param {FormData} body - The form data containing the GIF file to be uploaded.
 * @returns {Promise<Object|string>} A promise that resolves to the uploaded GIF object, or an error message if the upload fails.
 */
export const loadUploadGif = async body => {
  try {
    const response = await fetch(
      `https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`,
      {
        method: 'POST',
        body,
      }
    );
    const { data } = await response.json();
    return data;
  } catch {
    throw new Error('Selected file could not be uploaded.');
  }
};
