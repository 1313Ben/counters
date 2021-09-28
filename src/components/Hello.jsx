import { useState } from 'react';
import './hello.css'

const Hello = (props) => {
  const [clicked, setClicked] = useState(false);
  
  const classes = clicked ? 'clicked' : ''

  return ( <h1 onClick={() => { setClicked(!clicked)}} className= {classes}>
    Hello {props.name} {props.age}
  </h1>
  )
}

export default Hello;

// props = { name: 'Ben', age: 24}