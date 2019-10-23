const CounterReducer=(state=0,action)=>{
  let countersum =state;
  if (action.type==='INCREASE'){
    if(action.amount){
      return countersum+action.amount
    }
      return countersum+1
  }

  if (action.type==='DECREASE'){
    if(action.amount){
      return countersum-action.amount
    }
      return countersum-1
  }

  if (action.type ==='SET'){
    return action.amount
  }

  if (action.type === 'RESET'){
    return 0;
  }

  return state;
}

export default CounterReducer;
