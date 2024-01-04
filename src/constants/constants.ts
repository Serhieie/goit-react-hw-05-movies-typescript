export const BASE_URL: string = 'https://api.themoviedb.org/3/';
export const API_KEY: string = 'api_key=713cb35a39a71866f61c58ef1cecbe50';

interface Options {
  method: string;
  params: {
    language: string;
    page: string;
    include_adult: boolean;
    per_page: string;
  };
  headers: { accept: string };
}

export const options: Options = {
  method: 'GET',
  params: {
    language: 'en-US',
    page: '1',
    include_adult: false,
    per_page: '20',
  },
  headers: { accept: 'application/json' },
};
