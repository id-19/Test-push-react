import { useEffect, useState } from 'react'
import RegularPage from './Components/RegularPage'
import InitialValuePopUp from './Components/initialValuePopUp';

function App() {
  const [initialVal,setInitialVal] = useState(0);
  const [renderNormal,setRenderNormal] = useState(false);
  // useEffect(()=>{
  //   let stuffToBeRendered = <InitialValuePopUp handleSubmission={(val)=>{
  //     initialVal = val; }}/>
  // },[])
  // let stuffToBeRendered = <RegularPage initialVal={initialVal}/>
  return(
    <div>
      {!renderNormal && <InitialValuePopUp handleSubmission={(val)=>{setInitialVal(val); setRenderNormal(true)}}/>}
      {renderNormal && <RegularPage initialVal={initialVal}/>}
      </div>
  )
}

export default App
