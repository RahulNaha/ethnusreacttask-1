import React ,{useState}from 'react'

export default function Textform(props) {
  
  const ocp=(event) =>
  {
     setText(event.target.value);
  }
  const[text,setText]=useState('Hi All')
  return (
     <div>
     
<div class="mb-3">

<textarea class="form-control" value={text} rows="9" cols="60" onChange={ocp}  style={{ border: "2px solid black", borderRadius:"9px" }} ></textarea>
</div>

   <div className='ihij my -3'>
    <p>Word Count:{text.split(" ").length} </p>
   </div>
    </div>
    
  )
  
}
