import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    decreaseCount,
    increaseCount,
    resetCount,
    setCount,
  } from './action';

  const mapDispatchToProps = (dispatch) => ({
    ondecreaseCount: (amount) => dispatch(decreaseCount(amount)),
    onincreaseCount: (amount) => dispatch(increaseCount(amount)),
    onresetCount: () => dispatch(resetCount()),
    onsetCount: (amount) => dispatch(setCount(amount)),
  });


  function CountSection(props) {
    const [inputCount, setInputCount] = useState(0);
  
    const {
      counter,
      ondecreaseCount,
      onincreaseCount,
      onresetCount,
      onsetCount,
    } = props;
  
    return (
      <div >
  
        <div>
          <h1>The Increaser</h1>
          <p>{counter}</p>
          <button onClick={() => onincreaseCount(1)}>Increase</button>
        </div>
  
        <div>
          <h1>The Decreaser</h1>
          <h4>{counter}</h4>
          <button onClick={() => ondecreaseCount(1)}>Decrease</button>
        </div>
  
        <div>
          <h1>The Resetter</h1>
          <button onClick={() => onresetCount()}>Reset</button>
        </div>
  
        <div>
          <h1>The Setter</h1>
          <h4>{counter}</h4>
          <input
            onChange={(event) => setInputCount(event.target.value)}
            value={inputCount}
          />
        <button onClick={() => onsetCount(inputCount)}>Set</button>
        </div>
  
      </div>
    );
  }
  
  const mapStateToProps = (state) => ({
    counter: state.CountSection.counter,
  });
  

  
  export default connect(mapStateToProps, mapDispatchToProps)(CountSection);