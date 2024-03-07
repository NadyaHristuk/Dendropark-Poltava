import React from 'react';
import { Link } from 'react-router-dom';

export const AttentionItem = ({ id, title, paragraph, link }) => {
  return (
    <li key={id}>
      <div>{/* <Icon/> */}</div>
      <p>{title}</p>
      <p>{paragraph}</p>
      <Link>
        {link}
        {/* <Icon/> */}
      </Link>
    </li>
  );
};
