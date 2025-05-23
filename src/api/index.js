import axios from "axios";

export const API_KEY = process.env.REACT_APP_API_KEY;
export const ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const DEFAULT_SORT_BY = "vote_count.desc";

const http = axios.create({ baseURL: ENDPOINT, params: { api_key: API_KEY } });

const request = async (url, { params = {} } = {}) => {
  const response = await http(url, { params });

  return response.data;
};

const api = {
  movies: {
    discover: async ({ sortBy = DEFAULT_SORT_BY, page = 1 } = {}) =>
      request("/discover/movie", { params: { sort_by: sortBy, page } }),
    search: async ({ query = "", page = 1 } = {}) =>
      request("/search/movie", { params: { query, page } }),
    movieDetails: ({ movieId, appendToResponse = "videos" }) =>
      request(`/movie/${movieId}`, {
        params: { append_to_response: appendToResponse },
      }),
  },
};

export { api };
