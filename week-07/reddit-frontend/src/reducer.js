import {FETCHED_ARTICLE} from './action'

const initState = {
    article: [0, 0, 0, 0,0]
}

export default function (state = initState, action){
    if(action.type === FETCHED_ARTICLE){
        return {
            ...state,
            article: [...state.title, ...state.score]
        }
    }
    return state;
}