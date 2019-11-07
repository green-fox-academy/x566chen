import {FETCHED_ARTICLE} from './action'
import {UP_SCORE} from './action'
import {DOWN_SCORE} from './action'
import {POST_ARTICLE} from './action'

const initState = {
    article: []
}

export default function (state = initState, action){
    if(action.type === FETCHED_ARTICLE){
        return {
            ...state,
            article: [...state.article, ...action.article]
        }
    }else if(action.type === UP_SCORE){
        let new_article = [...state.article]

        new_article.splice(action.upscore.id-1,1,{
            ...action.upscore
        })

        return {
            ...state,
            article:[...new_article]
        }

        
    }else if(action.type === DOWN_SCORE){

        let new_article = [...state.article]

        new_article.splice(action.downscore.id-1,1,{
            ...action.downscore
        })

        return {
            ...state,
            article:[...new_article]
        }
       
    }else if(action.type === POST_ARTICLE){
        return {
            ...state,
            article: [action.postarticle]
        }

    }

    





    return state;
}