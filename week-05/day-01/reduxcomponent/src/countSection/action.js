import {COUNTER_DECREASE,COUNTER_INCREASE,COUNTER_RESET,COUNTER_SET,} from '../operation';
   
export const increaseCount = (amount = 0) => ({
    type: COUNTER_INCREASE,
    amount,
  });
export const decreaseCount = (amount = 0) => ({
    type: COUNTER_DECREASE,
    amount,
  });
  
  export const setCount = (amount = 0) => ({
    type: COUNTER_SET,
    amount,
  });
  export const resetCount = (amount = 0) => ({ type: COUNTER_RESET });

