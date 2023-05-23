import axios from 'axios';

const fetchUserRepos = () =>
  axios.get(`https://api.github.com/users/RaulMaya/repos?per_page=3`);

export default fetchUserRepos;
