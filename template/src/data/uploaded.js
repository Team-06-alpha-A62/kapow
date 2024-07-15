const uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds an uploaded GIF ID to the local storage if it doesn't already exist.
 * @param {string} gifId - The ID of the GIF to be added.
 */
export const addUploaded = gifId => {
  if (uploaded.find(id => id === gifId)) {
    return;
  }

  uploaded.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

/**
 * Retrieves the list of uploaded GIF IDs from the local storage.
 * @returns {Array<string>} An array of uploaded GIF IDs.
 */
export const getUploaded = () => [...uploaded];
