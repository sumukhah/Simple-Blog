import React from 'react';
import styles from './PostListView.css'

class PostListView extends React.Component{
  render(){

    return (
      <div className="Post" onClick={this.props.clicked}>
          <h5>{this.props.title}</h5>
          <p className="SelectedPost">{this.props.selectedPost}</p>
          <button type='submit' className='DeleteButton' onClick={this.props.DeleteButton}>Delete</button>
      </div>
    );
  }
}

export default PostListView;