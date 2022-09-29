// import React, { useState } from 'react';
// import Button from './Components/Button';
// import Greet from './Components/Greet';
// // import Person from './Components/Person';
// // import PersonList from './Components/PersonList';
// import { Heading } from './Components/Heading';
// import Input from './Components/Input';
// import { Oscar } from './Components/Oscar';

import Container from "./Components/Container";

// import Status from './Components/Status';

// function App() {
//   const personName={
//     first:'Jhon',
//     last:'Vick'
//   }

//   const personList =[
//     {
//       first:'Jhon',
//       last:'Vick'
//     },
//     {
//       first:'dane',
//       last:'Smith'
//     },
//     {
//       first:'Virat',
//       last:'Vick'
//     }
//   ]
//   // const handleClick = (event:any) =>{
//   //   console.log('working',event);
//   // }
//   const[value,setValue] = useState('')
//   return (
//     <div >
//       {/* <Greet name="Yasir Bajwa"  isLoggedIn={true} /> */}
//      {/* <Person name={personName}/> */}
//      {/* <PersonList names={personList}/>  */}
//      {/* <Status status = 'success'/> */}

//      {/* <Heading>PlaceHolder Children</Heading> */}
//      {/* <Oscar> */}
//        {/* <Heading>Oscar goes to AB dvelliers</Heading> */}
//      {/* </Oscar> */}
//      {/* <Button handleClick={(event) => console.log('Button Pressed',event)}/> */}
//      {/* <Input value={value} handleChange={(event) => setValue(event.target.value)}/> */}

//     </div>
//   );
// }


function App(){
  return(
    <div>
      <Container styles={{border:'1px solid red',padding:'2rem'}}/>
    </div>
  )
}
export default App;
