import api from '../api';

const query = `
query {
  anime: Page(perPage: 5) {
    media(type: ANIME sort: TRENDING_DESC) {
      ...cardFieldItems
    }
  }
  manga: Page(perPage: 5) {
    media(type: MANGA, sort:TRENDING_DESC) {
     ...cardFieldItems
    }
  }
  lightnovel: Page(perPage: 5) {
    media(sort: TRENDING_DESC) {
      ...cardFieldItems
    }
  }
}

fragment cardFieldItems on Media {
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
`;

interface Response {
  error: string | null;
  hasLoaded: boolean;
  anime: Array<Object>;
  manga: Array<Object>;
  lightnovel: Array<Object>;
}

const getTrendingForHomepage = async (): Promise<Response> => {
  try {
    const { data } = await api.post('/', { query });
    return {
      error: null,
      anime: data.data.anime.media,
      manga: data.data.manga.media,
      lightnovel: data.data.lightnovel.media,
      hasLoaded: true,
    };
  } catch (error) {
    return {
      error,
      hasLoaded: true,
      anime: [],
      manga: [],
      lightnovel: []
    };
  }
};

export default getTrendingForHomepage;
