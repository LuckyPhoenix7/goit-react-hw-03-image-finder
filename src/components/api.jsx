import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async imageName => {
  const params = {
    key: '39362847-41ae394614fadabdd72bf94a7',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 24,
    page: 1,
  };

  const response = await axios.get('', { params });
  return response.data;
};
