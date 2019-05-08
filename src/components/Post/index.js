import React from 'react';
import HeaderPost from '../HeaderPost/index';

import './styles.css';

const Post = props => (
  <div className="post-container">
    <HeaderPost img={props.img} time={props.time} name={props.name} />
    <div className="post-content">{props.message}</div>
  </div>
);

export default Post;
