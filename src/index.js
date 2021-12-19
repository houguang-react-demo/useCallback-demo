import React, {useMemo, useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');
  
  const expensive = useMemo(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  },[count])
  
  return <div>
    <h4>{count}-{val}-{expensive}</h4>
    <div>
      <button onClick={() => setCount(count + 1)}>按钮</button>
      {/*未使用Memo时，修改val时expensive也会重新渲染,使用useMemo时，修改val时，不会重新渲染expensive*/}
      <input value={val} onChange={event => setValue(event.target.value)}/>
    </div>
  </div>;
  
}

ReactDOM.render(
  <><App/></>
  ,
  document.getElementById('root')
);
