import React from 'react';
import styles from './PostListView.css'

const PostListView = (props) => {
  return (
    <div className="Post">
        <h5>{props.title}</h5>
       
    </div>
  );
}

export default PostListView;