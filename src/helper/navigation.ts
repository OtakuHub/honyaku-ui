import history from '../history';

const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const target = event.target as HTMLElement;
  const { url } = target.dataset;
  history.push(url as string);
};

export default handleNavigation;
