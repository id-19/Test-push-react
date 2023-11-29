import React, { useState, useEffect } from 'react'
import "../Styles/initialValuePopUp.css"

export default function InitialValuePopUp({handleSubmission}) {
    let inVal = 0;
    const [rendered,setRendered] = useState(false);
  return (
    <div >
      <form onSubmit={()=>handleSubmission(inVal)}>
      <h1>Enter the initial value of ctr</h1>
        <div id="form-div">
          <label htmlFor="Initial Value">
              <input type="number" onChange={(e)=>inVal=parseInt(e.target.value)} />
          </label>
          <button id="submission-button" type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
