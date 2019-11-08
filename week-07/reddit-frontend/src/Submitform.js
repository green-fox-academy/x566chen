import React, { useState } from 'react';
import './Submitform.css'
import {connect} from 'react-redux';
import {PostArticle} from './action';




function Submitform({history,addArticle}) {
  const [title, changetitle] = useState('');
  const [URL, changeURL] = useState('');

  const handleChangetitle = event =>{
    changetitle(event.target.value)
    console.log(event.target.value)
  }

  const handleChangeURL = event =>{
    changeURL(event.target.value)
    console.log(event.target.value)
  }

  const handleClick=(event)=>{
    event.preventDefault();
    
    addArticle(title, URL)
    history.push('/');
  }

  return (
    <div className='Form'>
      <h2>TITLE</h2>
      <input  className='title' type='text' onChange={handleChangetitle} value={title}></input>
      <h2>URL</h2>
      <input   className='URL' type='text' onChange={handleChangeURL} value={URL}></input>
      <br />
      <button type = 'submit' onClick={handleClick} >SUBMIT</button>
    </div>
  )


};
const mapDispatchToProps = dispatch => {
  return {
    addArticle: (title, URL) => dispatch(PostArticle(title, URL))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Submitform);