const searchPage = `
  query($query: String) {
    Page(perPage: 10) {
      media(search: $query) {
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

export default searchPage;
