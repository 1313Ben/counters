import { useState } from "react";

// initial = 0 -> defaultvalue for initial if there no props for initial
const Counter = ({initial = 0, step = 1}) => {
  const [count, setCount] = useState(initial);

  const subtract = () => {
  (count - 1 < 0) ? setCount(0) : setCount(count - step) 
  }

  return (
    <div className="d-flex align-items-center">
      <button onClick={() => subtract()} className="btn btn-danger" disabled={count === 0}>
        -
      </button>

      <span className="badge bg-dark m-3">
        {count}
      </span>

      <button onClick={() => setCount(count + step)} className="btn btn-success">
        +
      </button>
    </div>
  )
}



export default Counter
