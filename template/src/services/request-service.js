const API_KEY = 'FeFboweua5M9OT2rymbqjhh8DVsXxvxJ';

/**
 *
 * @return {Promise}
 */
export const loadTrending = async () => {
  const response = await fetch(`api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);
  return response.json();
}