import React from 'react';

import './styles.css';

const HeaderPost = props => (
  <div className="header-container">
    <div className="img-box">
      <img className="profile-img" src={props.img} alt="" />
    </div>
    <div className="personal-data">
      <h4>{props.name}</h4>
      <small>{props.time}</small>
    </div>
  </div>
);

export default HeaderPost;
