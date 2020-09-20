import React, { useState, useEffect } from 'react';
import WorkCardList from '../../components/WorkCardList';
import getTrendingForHomepage from '../../services/queries/homePage';
import Loading from '../../components/Loading';
import './style.sass';

const Home = () => {
  const [response, setResponse] = useState({
    error: null,
    hasLoaded: false,
  });

  useEffect(() => {
    const getTrendingMedia = async () => {
      const res = await getTrendingForHomepage();
      setResponse({ ...res });
    };

    getTrendingMedia();
  }, []);

  if (!response.hasLoaded) {
    return (<Loading />);
  }

  if (response.error) {
    return (<p>{response.error.message}</p>);
  }

  return (
    <div>
      <div className="section">
        <h4>Light Novels</h4>
        <WorkCardList workList={response.lightnovel} />
      </div>
      <div className="section">
        <h4>Manga</h4>
        <WorkCardList workList={response.manga} />
      </div>
      <div className="section">
        <h4>Anime</h4>
        <WorkCardList workList={response.anime} />
      </div>
    </div>
  );
};

export default Home;
