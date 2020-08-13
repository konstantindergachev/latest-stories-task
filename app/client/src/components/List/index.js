import React from 'react';
import './List.scss';

const List = ({ title, url }) => {
  return (
    <li className="story">
      <h4>{title}</h4>
      <a href={url} target="_blank">
        {title.substring(0, 20)}...
      </a>
    </li>
  );
};

export default List;
