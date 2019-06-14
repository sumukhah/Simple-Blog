import React from 'react';
import axios from 'axios';

import PostListView from '../../PostListView/PostListView';
import CreatePostForm from '../../CreatePostForm/CreatePostForm';
import styles from './Blog.css';

class Blog extends React.Component {
  
  state = {
    posts:[],
    selectedPost:null,
    reRenderHelper:null,
  };

  componentDidMount() {
    axios.get('http://localhost:8000/post/?format=json')
    .then((response) => {
      this.setState({posts:response.data});
      console.log(this.state.posts)
    })
    .catch((response) => {
      window.alert('Server is not Responding!!!')
      window.alert('Create a post to confirm')
    })
  }

  render() {
    
    const onClickHandler = (body,title) => {
      console.log(body,title);
      this.setState({selectedPost:body})
    }

    const clickDeleteHandler = (id) => {
      window.alert('Hey are you sure you want to delete')
      axios.delete(`http://localhost:8000/post/${id}/?format=json`)
      .then((response) => {console.log('item id delted')})
     
      this.setState({state:this.state});
    }

    const posts = this.state.posts.map((post)=>{
      return <PostListView title={post.title} 
        body={post.text_box} key={post.id} 
        selectedPost={post.text_box===this.state.selectedPost?this.state.selectedPost:null}
       clicked={() => {onClickHandler(post.text_box,post.title)}}
       DeleteButton={() => {clickDeleteHandler(post.id)}}/>
    });

    return (
      <div >
      <div className='Posts'>
        {posts}
      </div>
      <div className='CreatePost'>

      <CreatePostForm />
      </div>
      </div>
    );
  }
}

export default Blog;