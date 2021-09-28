
import Hello from "./Hello"

const App = () => {
  return (
    <>
      <Hello name='Ricardo' age={24}/>
      <Hello name='Ben' age={30}/> 
    </>
  )
}

export default App;

// age={24} , 24 is an integer now
// use this syntax if you want to 24 as an integer