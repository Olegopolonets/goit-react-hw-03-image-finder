import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=40711128-36f054e20f11fdfe312beb589&q=';

export const fetchImages = async configParams => {
  const {
    data: { hits },
  } = await axios.get('', {
    params: {
      per_page: 12,
      ...configParams,
    },
  });
  return hits;
};

/* JS */
// export async function getPhotosPixybay(userInput, page, per_page) {
//     const params = new URLSearchParams({
//       key: API_KEY,
//       q: userInput,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       per_page,
//       page,
//     });
//     const res = await axios.get(`${BASE_URL}?${params}`);

//     console.log(res.data);
//     return res.data;
//   }