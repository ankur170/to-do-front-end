import React,{useState} from 'react';

const App = ()=> {

  const [counter,setCounter] = useState(0);
  
  console.log(`counter value is updated ${counter} time`)
  setTimeout(() => {
    setCounter(counter+1)
    console.log(` ${counter} `)
  }, 5000);
 console.log(`last counter is ${counter}`)
  return (
    <div >
      <h3>counter is {counter} </h3>
    </div>
  );
}

export default App;
