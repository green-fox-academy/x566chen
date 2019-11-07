import React from "react";
import ListArticle from './article.js'
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";

// const Nav = props => {
function Nav(props){

  const {history} = props;

  const handleClick = () => {
    history.push('/Submitform');
  }
  return (
  <Router>
  <div className="background">
      <div className ="left">
        <ListArticle />
      </div>
      <div className="right">
          <div className ="right-buttom">
      <button classNema='btn' onClick={handleClick}>SUBMIT A NEW POST</button>
          </div>
      </div>
  </div>
  </Router>
  )
};

export default Nav;