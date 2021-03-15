import React from 'react';

const Hello = (props)=>{
  const {name , age} = props;
  const bornYear = ()=> new Date().getFullYear() - age ;
  return(
    <>
    <h2>here is hello component and helloing to {name}  whom age is {age}</h2>
    <h3>born year is {bornYear()}</h3>
    </>
  )
}

const App = ()=> {

  const name = "ankur yadav";
  const age= 23;
  return (
    <div >
      <h1>Hello , React</h1>
      <Hello  name = {name} age={age} />
    </div>
  );
}

export default App;
