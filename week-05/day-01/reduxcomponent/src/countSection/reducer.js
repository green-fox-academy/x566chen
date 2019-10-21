import {
    COUNTER_DECREASE,
    COUNTER_INCREASE,
    COUNTER_RESET,
    COUNTER_SET,
  } from '../operation';

  const initState = {
    counter: 0,
    tags: []
}

function CountReducer(state=initState, action){
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
    }
}

export default CountReducer;