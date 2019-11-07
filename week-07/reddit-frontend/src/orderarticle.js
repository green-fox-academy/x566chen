import React from 'react'
import './orderarticle.css'
import {UpScoreAction} from './action'
import {DownScoreAction} from './action'
import {connect} from 'react-redux';

function Orderarticle({item, upScore, downScore}) {

const handleClickUp= ()=>{
    upScore(item.id)

}
const handleClickDown= ()=>{
    downScore(item.id)
}
    return (
        
        <div className = "part" >
            <div className="btn">
            <button className='upbtn' onClick={handleClickUp}></button>
            <div className = "score">
                <h3>{item.score}</h3>
            </div>
            <button className='downbtn' onClick={handleClickDown}></button>
            </div>
            <div className = "content">
                <div className = "title">
                    <h2>{item.title}</h2>
                </div>
                <div className = "function">
                    <button>Modify</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({upscore, downscore}) => ({upscore, downscore})

const mapDispatchToProps = (dispatch) => ({
    upScore: (id) => dispatch(UpScoreAction(id)),
    downScore: (id) => dispatch(DownScoreAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orderarticle)