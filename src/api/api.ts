export const BASE_URL = 'http://jsonplaceholder.typicode.com';

const request = async (url: string, item = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, item);

  return response.json();
};

export const getAllPhotos = async () => {
  return request('/photos')
    .then(data => data.slice(0, 500));
};

export const deletePhoto = (photoId: number) => {
  return request(`/photos/${photoId}`, { method: 'DELETE' });
};
