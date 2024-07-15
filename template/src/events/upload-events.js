import { addUploaded } from '../data/uploaded.js';
import { loadUploadGif } from '../services/request-service.js';

/**
 * Uploads a GIF file to the Giphy API and adds the uploaded GIF's ID to the uploaded data.
 * @param {File} file - The GIF file to be uploaded.
 * @returns {Promise<string|undefined>} A promise that resolves to an error message if the upload fails, or undefined if successful.
 */
export const uploadGif = async file => {
  try {
    const buffer = await file.arrayBuffer();
    const formData = new FormData();
    const blob = new Blob([buffer]);
    formData.append('file', blob, file.name);

    const data = await loadUploadGif(formData);
    addUploaded(data.id);
  } catch (error) {
    return error.message;
  }
};
