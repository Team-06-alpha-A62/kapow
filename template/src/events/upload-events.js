import { loadUploadGif } from "../services/request-service.js";

export const uploadGif = async file => {
  try {
    const buffer = await file.arrayBuffer();
    const formData = new FormData();
    const blob = new Blob([buffer]);
    formData.append('file', blob, file.name);

    const data = await loadUploadGif(formData);
    console.log(data.id);
  } catch (error) {
    return error.message;
  }
};
