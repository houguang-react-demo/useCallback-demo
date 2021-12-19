import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';

const set = new Set()
const set2 = new Set()
const Callback = () => {
  const [count, setCount] = useState(1);
  const [state, setState] = useState(1);
  const [val, setVal] = useState("");
  
  const callback = useCallback(
    () => {
      console.log(count)
    },
    [count],
  );
  set.add(callback)
  
  const callback1 = () => {
    console.log(state)
  }
  set2.add(callback1)
  
  return <div>
    <div>
      <h4>{count}</h4>
      <h4>{set.size}</h4>
      {/*使用useCallback时，useCallback返回函数的缓存,组件重新渲染时，依赖的值没有变化时不会重新生成函数*/}
      <button onClick={() => setCount(count + 1)}>按钮1</button>
    </div>
    <hr/>
    <div>
      <h4>{state}</h4>
      <h4>{set2.size}</h4>
      {/*未使用useCallback时，组件重新渲染时会重新生成函数，set2.add为插入*/}
      <button onClick={()=>setState(state+1)}>按钮2</button>
      <input value={val} onChange={event => setVal(event.target.value)}/>
    </div>
  </div>;
}

ReactDOM.render(
  <><Callback/></>
  ,
  document.getElementById('root')
);
