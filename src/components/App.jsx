
// import Hello from "./Hello"
import Counter from "./Counter";
import { useState } from 'react';

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, initial: 5, step: 5 },
    { id: 2, initial: 100 }, // step = 1
    { id: 3, step: 100 }, // initial = 0
    { id: 4, initial: 4, step: 2 }
  ]);

  // array.filter(element => { true/false => keep the elements where this thing is true})

  const deleteCounter = (id) => {
    const newCounters = counters.filter(counter => counter.id !== id)
    setCounters(newCounters)
  }

  const addCounter = () => {  
    setCounters([...counters, { id: counters.slice(-1)[0].id + 1 }])
    // counters.slice(-1)[0].id -> finding the last element
  }

  return (
    <div className="container mt-3">
      <h1>My Counters</h1>
    
      {counters.map(counter => {
        // return 
        return (
          <div key={counter.id}>
            <h3 className="mt-4">Counter #{counter.id}</h3>
            <div className="d-flex align-items-center">
            <Counter {...counter} />
            {/* // same like - > <Counter initial={counter.initial} step={counter.step}  */}
              <button onClick={() => deleteCounter(counter.id)} className="btn btn-link text-danger">
                <i className="bi bi-trash-fill ms-2"></i>
              </button>
            </div>
          </div>
        )
      })}

      <button className='btn btn-primary mt-5' onClick={ () => addCounter()}>Add counter</button>
    </div>
  )
}

export default App;

// age={24} , 24 is an integer now
// use this syntax if you want to 24 as an integer