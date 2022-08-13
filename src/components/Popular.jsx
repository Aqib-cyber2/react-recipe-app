
import { useState, useEffect  } from 'react';
function Popular() {

  function Stateupdate(){
    return "defafult";
  }
  const [state, setState] = useState( ()=> Stateupdate() )
  // let [stae1, anothersetstate] = useState( ()=> 1 )
  const [stateeffect, setState1] = useState( "stateeffect") ;

  useEffect( ()=>{
    console.log("stateeffect")
  }, [state])

  return <div>
    <button onClick={ ()=> setState('set') }>set</button>
    <button onClick={ ()=> setState('update') }>update</button>
    <button onClick={ ()=> setState("seteffect update") }>useeffect</button>
    <button onClick={ ()=> setState1("seteffect another") }>another btn</button>
    <h1> {state} </h1>
  </div>
}

export default Popular