import React from 'react';
import axios from 'axios';

import PostListView from '../../PostListView/PostListView';
import styles from './Blog.css';

class Blog extends React.Component {
  
  state = {
    posts:[],
    selectedPost:null,
  };

  componentDidMount() {
    axios.get('http://localhost:8000/post/?format=json')
    .then((response) => {
      this.setState({posts:response.data});
      console.log(this.state.posts)
    })
  }

  render() {
    
    const onClickHandler = (body,title) => {
      console.log(body,title);
      const jack = this.setState({selectedPost:body})
    }

    const posts = this.state.posts.map((post)=>{
      return <PostListView title={post.title} 
        body={post.text_box} key={post.id} 
        selectedPost={post.text_box===this.state.selectedPost?this.state.selectedPost:null}
       clicked={() => {onClickHandler(post.text_box,post.title)}}
      />
    });

    return (
      <section className='Posts'>
      <div>
        {posts}
      </div>
      </section>
    );
  }
}

export default Blog;