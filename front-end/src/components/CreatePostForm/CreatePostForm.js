import React from 'react';
import axios from 'axios';

import styles from './CreatePostForm.css';


class CreatePostForm extends React.Component {
  state = {
    postObject : {title:null,text_box:null}
  }
  render() {
    return (
      <div>
        <form>
          <label>
            <b>
            Title:
            </b>
          </label>
          <input type="text" className='TitleBox'>
          </input>
          <br />
          <label>
            <b>
            Post Body:
            </b>
          </label>
          <input type="text" className='BodyBox'>
          </input>
        </form>
      </div>
    )
  }
}
export default CreatePostForm;