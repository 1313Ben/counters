import { useState } from 'react';
import './hello.css'

const Hello = ({name, age}) => {
  const [clicked, setClicked] = useState(false);
  
  const classes = clicked ? 'clicked' : ''

  return ( <h1 onClick={() => { setClicked(!clicked)}} className= {classes}>
    Hello {name} {age}
  </h1>
  )
}

export default Hello;

// props = { name: 'Ben', age: 24}
