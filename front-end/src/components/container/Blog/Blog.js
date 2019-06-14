import React from 'react';
import axios from 'axios';

import PostListView from '../../PostListView/PostListView';
import FooterButtons from '../../Footer/FooterButtons';
import CreatePostForm from '../../CreatePostForm/CreatePostForm';
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
      this.setState({selectedPost:body})
    }

    const posts = this.state.posts.map((post)=>{
      return <PostListView title={post.title} 
        body={post.text_box} key={post.id} 
        selectedPost={post.text_box===this.state.selectedPost?this.state.selectedPost:null}
       clicked={() => {onClickHandler(post.text_box,post.title)}}
      />
    });

    const createForm = () => {
      console.log('Create from should render');
    }

    return (
      <div >
      <div className='Posts'>
        {posts}
      </div>
      <div className='CreatePost'>
      <FooterButtons clicked={() => {
        createForm()
      }}/>
      <CreatePostForm />
      </div>
      </div>
    );
  }
}

export default Blog;