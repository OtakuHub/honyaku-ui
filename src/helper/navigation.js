import history from '../history';

const handleNavigation = (event) => {
  event.preventDefault();
  const { url } = event.target.dataset;
  history.push(url);
};

export default handleNavigation;
