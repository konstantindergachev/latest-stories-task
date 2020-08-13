import React, { Fragment } from 'react';
import { api } from '../../api';
import List from '../../components/List';
import Spinner from '../../components/Spinner';
import { useFetch } from '../../hooks/useFetch';
import './Home.scss';

const Home = () => {
  const { data, loading } = useFetch(api.stories);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="stories__header">
            <span>titles</span>
            <span>links</span>
          </div>
          <ul className="stories">{data.map((story) => <List key={story.id} title={story.title} url={story.url} />)}</ul>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
