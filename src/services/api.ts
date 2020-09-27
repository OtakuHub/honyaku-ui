import axios from 'axios';

export default axios.create({
  baseURL: 'https://graphql.anilist.co',
});
