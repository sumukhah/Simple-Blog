import React from 'react';

import styles from './FooterButtons.css';

const FooterButtons = (props) => {
  return (
    <div>
      <button className="CreatePostButton" onClick={props.clicked}>
          Create New Post
      </button>
    </div>
  );
}

export default FooterButtons;