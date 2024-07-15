/**
 * Helper function to fetch data from a given URL.
 * @param {string} url - The URL to fetch data from.
 * @param {Object} options - The fetch options (optional).
 * @returns {Promise<Object>} A promise that resolves to the fetched data.
 */
export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${errorData.message}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Could not load data from Giphy API. ${error.message}`);
  }
};
