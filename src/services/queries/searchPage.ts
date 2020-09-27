import api from '../api';

const query = `
  query($search: String) {
    Page(perPage: 10) {
      media(search: $search) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
        genres
        description(asHtml: true)
      }
    }
  }
`;

interface Response {
  error: string | null;
  hasLoaded: boolean;
  results: Array<Object>;
}

const getSearchResults = async (search: string): Promise<Response> => {
  try {
    const variables = { search };
    const response = await api.post('/', {
      query,
      variables,
    });
    return {
      error: null,
      results: response.data.data.Page.media,
      hasLoaded: true,
    };
  } catch (error) {
    return {
      error,
      hasLoaded: true,
      results: []
    };
  }
};

export default getSearchResults;
