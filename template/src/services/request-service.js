// const API_KEY = 'FeFboweua5M9OT2rymbqjhh8DVsXxvxJ';
const API_KEY = 'eb7zm6ySTzlB7D1yeWX7Zu6KJDECrPPM';
/**
 *
 * @return {Promise}
 */
export const loadTrending = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
  );
  const { data } = await response.json();
  return data;
};

export const loadSingleGif = async id => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
  );
  const { data } = await response.json();
  return data;
};

export const loadSearchGifs = async (searchTerm = '') => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}`
  );
  const { data } = await response.json();
  return data;
};

export const loadRandomGif = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );
  const { data } = await response.json();
  return data;
};
