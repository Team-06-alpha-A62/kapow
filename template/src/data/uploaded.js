let uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addUploaded = gifId => {
  if (uploaded.find(id => id === gifId)) {
    // Gif has already been added to uploaded
    return;
  }

  uploaded.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

export const getUploaded = () => [...uploaded];
