import React from 'react';
import AsyncIncrementer from './countSection/AsyIncrementer'
import Complex from './countSection/Comple'
import CounterIncrease from './countSection/CounterIncrease'
import CounterDecrease from './countSection/CounterDecrease'
import CounterSet from './countSection/CounterSet'
import CounterReset from './countSection/CounterReset'
import AddTag from './tagSection/AddTag'
import RemoveAll from './tagSection/RemoveAll'
import RemoveTag from './tagSection/RemoveTag'
import Tag from './tagSection/Tag'






function App() {
  return (
    <div className="App">
      <div className='section'>
        <CounterIncrease/>
        <CounterDecrease/>
        <CounterSet/>
        <CounterReset/>
      </div>
      <div className='section'>
        <Tag/>
        <AddTag/>
        <RemoveTag/>
        <RemoveAll/>
        <Complex/>
      </div>
      <div className='section'>
        
        <AsyncIncrementer/>
      </div>


      
    </div>
  );
}

export default App;
