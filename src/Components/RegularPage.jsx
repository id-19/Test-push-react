import React from 'react'
import { useState,useEffect } from 'react'
import '../Styles/RegularPage.css'


export default function RegularPage({initialVal}) {
    const [ctr,setCtr] = useState(initialVal);
    // let newValue = null;
    //This is the value by which we add,subtract ctr/ that we set ctr to
    const [newValue,setNewValue] = useState(0);
    const [noOfChanges,setNoOfChanges] = useState(-1);
    //To track the last operation
    const [lastOp,setLastOp] = useState("")
    useEffect(()=>{
        setNoOfChanges(noOfChanges+1)
    },[ctr])
  
    return (
      <div id="mainDiv">
        <div id="modifyDiv">
          <div id="setValue">
            <input type="number" value={newValue} placeholder="" onChange={(event)=>{
              let val = 0;
              if(typeof(event.target.value)==="string"){
                val = parseInt(event.target.value)
                setNewValue(val)
            }
            }}/>
          </div>
          <button id="addition" onClick={()=>{
            setCtr(ctr+newValue)
            setLastOp(`+${newValue}`)
          }}>Add</button>
          <button id="subtraction" onClick={()=>{
            setCtr(ctr-newValue)
            setLastOp(`-${newValue}`)
          }}>Subtract</button>
          <button id="set" onClick={()=>{
            setCtr(newValue);
            setLastOp(`=${newValue}`);
        }}>Set</button>
        </div>
        <div id="display-div">
          <h1 style={{"fontSize":"50px"}}>Ctr's value is {ctr}</h1>
          <h1 style={{"fontSize":"50px"}}>You've made {noOfChanges} changes since we started!<br/></h1>
          <h1 style={{"fontSize":"50px"}}>Last Operation: </h1>
          <h1 style={{"fontSize":"50px"}}>{lastOp}</h1>
        </div>
      </div>
    )
}
