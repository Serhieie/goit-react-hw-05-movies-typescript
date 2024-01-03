const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=713cb35a39a71866f61c58ef1cecbe50';
const options = {
  method: 'GET',
  params: {
    language: 'en-US',
    page: '1',
    include_adult: false,
    per_page: '20',
  },
  headers: { accept: 'application/json' },
};
export { BASE_URL, API_KEY, options };
