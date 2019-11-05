import React from 'react'
import {connect} from 'react-redux'
import Orderarticle from './orderarticle'

const mapStateToProps = ({article}) => ({article})

export default connect(mapStateToProps)(function({article}){
    return(
        <div className="articles">
            {article.map(item=> <Orderarticle item={item} />)}
        </div>
    )
})