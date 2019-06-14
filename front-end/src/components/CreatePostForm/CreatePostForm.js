import React from 'react';
import axios from 'axios';


import styles from './CreatePostForm.css';


class CreatePostForm extends React.Component {
  state = {
    postObject : {title:'null',text_box:'nussll'}
  }
  render() {

    const FormsubmitHandler = () => {
      axios.post('http://localhost:8000/post/',this.state)
      .then((response) => {console.log(response)})
      .catch((response) => {console.log(response)})
    }

    return (
      <div>
        <form>
          <label>
            <b>
            Title:
            </b>
          </label>
          <input type="text" className='TitleBox' onChange={(e)=>{this.setState({title : e.target.value})}}>
          </input>
          <br />
          <label>
            <b>
            Post Body:
            </b>
          </label>
          <input type="text" className='BodyBox' onChange={(e)=>{this.setState({text_box:e.target.value})}}>
          </input>
          <button type='submit' className="CreatePostButton" onClick={() => {FormsubmitHandler()}}>
          Create New Post
          </button>
        </form>
      </div>
    )
  }
}
export default CreatePostForm;

