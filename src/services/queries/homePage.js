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

const getTrendingForHomepage = async () => {
  try {
    const response = await api.post('/', { query });
    return {
      anime: response.data.data.anime.media,
      manga: response.data.data.manga.media,
      lightnovel: response.data.data.lightnovel.media,
    };
  } catch (error) {
    return { error };
  }
};

export default getTrendingForHomepage;
