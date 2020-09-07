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

const getSearchResults = async (search) => {
  try {
    const variables = { search };
    const response = await api.post('/', {
      query,
      variables,
    });
    return { results: response.data.data.Page.media };
  } catch (error) {
    return { error };
  }
};

export default getSearchResults;
