import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './counter.css'

function counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='counter-container'>
      <h2>Click Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>
      {count == 0 && <p>You've reached the limit!</p>}
    </div>
  );
}
export default counter
