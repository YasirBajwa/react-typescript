import React from 'react';
import Greet from './Components/Greet';
// import Person from './Components/Person';
// import PersonList from './Components/PersonList';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';

import Status from './Components/Status';

function App() {
  const personName={
    first:'Jhon',
    last:'Vick'
  }

  const personList =[
    {
      first:'Jhon',
      last:'Vick'
    },
    {
      first:'dane',
      last:'Smith'
    },
    {
      first:'Virat',
      last:'Vick'
    }
  ]
  return (
    <div >
      <Greet name="Yasir Bajwa"  isLoggedIn={true} />
     {/* <Person name={personName}/> */}
     {/* <PersonList names={personList}/>  */}
     {/* <Status status = 'success'/> */}

     {/* <Heading>PlaceHolder Children</Heading> */}
     {/* <Oscar> */}
       {/* <Heading>Oscar goes to AB dvelliers</Heading> */}
     {/* </Oscar> */}
    </div>
  );
}

export default App;
