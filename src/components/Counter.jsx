import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const subtract = () => {
  (count - 1 < 0) ? setCount(0) : setCount(count - 1) 
  }

  return (
    <div className="d-flex align-items-center">
      <button onClick={() => subtract()} className="btn btn-danger">
        -
      </button>

      <span className="badge bg-dark m-3">
        {count}
      </span>

      <button onClick={() => setCount(count + 1)} className="btn btn-success">
        +
      </button>
    </div>
  )
}

export default Counter
