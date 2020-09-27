import api from '../api';

const query = `
  query($mediaType: MediaType) {
    Page(perPage: 20) {
      media(type: $mediaType, sort: TRENDING_DESC) {
        type
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

const getCategoryWork = async (mediaType: string): Promise<Response> => {
  try {
    const variables = { mediaType };
    const { data } = await api.post('/', {
      query,
      variables,
    });
    return {
      error: null,
      results: data.data.Page.media,
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

export default getCategoryWork;
