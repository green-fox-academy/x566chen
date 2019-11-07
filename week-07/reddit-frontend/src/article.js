import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Orderarticle from './orderarticle'
import {fetchArticleAction} from './action'

function ListArticle ({article, getArticle}) {
  
    useEffect(() =>{ getArticle()}, []);
     return (
       <div >
             {article.map(item => <Orderarticle item={item} />)}
         </div>
     )
}
    
    const mapStateToProps = ({article}) => ({article})
    const mapDispatchToProps = (dispatch) => ({
      getArticle: () => dispatch(fetchArticleAction())
    })
    export default connect(mapStateToProps, mapDispatchToProps)(ListArticle)
