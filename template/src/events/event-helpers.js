import { renderUploadGifDetails } from "./gif-details-events.js";

export const setActiveNav = page => {
  const navButtons = document.querySelectorAll('.nav-link');
  [...navButtons].forEach(btn =>
    btn.getAttribute('data-page') === page
      ? btn.classList.add('active')
      : btn.classList.remove('active')
  );
};

export const debounce = (func, delay) => {
  let debounceTimer;
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
};

export const getDataURL = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function(event) {
      resolve(event.target.result);
    };
    reader.onerror = function(error) {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

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
