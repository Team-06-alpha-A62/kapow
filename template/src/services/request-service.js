const API_KEY = 'FeFboweua5M9OT2rymbqjhh8DVsXxvxJ';

/**
 *
 * @return {Promise}
 */
export const loadTrending = async () => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);
  const trending = response.json();
  return trending.data;
}