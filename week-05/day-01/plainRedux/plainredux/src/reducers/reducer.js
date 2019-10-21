
const initState = {
    counter: 0,
    tags: []
}



function changeReducer(state=initState, action){
    switch (action.type){
        case 'INCREASE':
                if (action.amount){
                    return{
                        ...state,
                        counter: state.counter + action.amount
                    }
                } else{
                    return{
                        ...state,
                        counter: state.counter + 1
                    }
                }
        case 'DECREASE':
                if (action.amount){
                    return{
                        ...state,
                        counter: state.counter - action.amount
                    }
                } else{
                    return{
                        ...state,
                        counter: state.counter - 1
                    }
                }
        case 'RESET':
                return {
                    ...state,
                    counter: 0
                }
        case 'SET':
                return {
                    ...state,
                    counter: action.amount
                }
        case 'ADD_TAG':
            if(state.tags.indexOf(action.tag)==-1){
                return{
                    ...state,
                    tags: [...state.tags, action.tag]
                }
            }
            return {...state}

        case 'REMOVE_TAG':
            let index = state.tags.indexOf(action.tag);
            let empty=[...state.tags]
            empty.splice(index,1);
            return{
                ...state,
                tags: [...empty]
            }

        case 'REMOVE_TAGS':
            return{
                ...state,
                tags: []
            }
    }
}



export default changeReducer;