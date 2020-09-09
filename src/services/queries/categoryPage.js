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

const getCategoryWork = async (mediaType) => {
  try {
    const variables = { mediaType };
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
    };
  }
};

export default getCategoryWork;
