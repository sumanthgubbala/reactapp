import React ,{useState}from 'react'

export const Count = () => {
    const [ininame,setname]=useState(0)
    function changeclick(){
      setname(ininame+1)
    } 
    function decrementClick(){
      setname(ininame-1)
    }
    return(
      <div>
        <p>{ininame}</p>
        <button onClick={changeclick}>clickme</button>
        <button onClick={decrementClick}>decrement</button>
      </div>
    );  
}
export default Count;

