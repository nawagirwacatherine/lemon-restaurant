// import './style.css'

// function App () {

//   return(
  
//     <form className="form-container">
//       <div className="form-field">
//         <label htmlFor="date">Date</label>
//         <input type="text" id="date" />
//       </div>

//       <div className="form-field"><label htmlFor="time">Time</label>
//       <input type="text" id="time" />
//       </div>

//       <div className="form-field">
//       <label htmlFor="number-of-guests">Number of guests</label>
//       <input type="text" id="number-of-guests" />

//       </div>
      


//       <div className="form-field">
//       <label htmlFor="occasion">Occasion(Birthday Anniversary)</label>
//       <input type="text" id="occasion" />
//       </div>


//       <div className="form-field">
//       <label htmlFor="reservation">Submit reservation button</label>
//       <input type="submit" id="reservation" />
//       </div>


//     </form>
   
//   )

// }

// export default App

import "./App.css"

import { useState } from "react";


function App(){
  const[name, setName]= useState("");
  const[score, setScore]= useState("10");
  const[comment, setComment] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10){
      alert("Please provide a comment explaining why the exprience was poor");
      return;
    }
    console.log("Form submitted!");
    setName("");
    setComment("");
    setScore("10");
    // console.log("Form submitted!");
  }
  return(
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
     <div className="Field">
      <label htmlFor="name">Name</label>
      <input
      id="name"
      type="text"
       placeholder="Name" 
       name="name" 
       value={name} onChange={e => setName(e.target.value)} />
     </div>

     <div className="field">
      <label htmlFor="range">Score:{score}</label>
      <input type="range" 
      min="0"
       max="10" 
       value={score}
        onChange={e => setScore(e.target.value)} />
     </div>

     <div className="Field">
 <label>
comment:
<textarea value={comment} onChange = {e => setComment(e.target.value)}/>
 </label>
     </div>

     <button disabled={!name} type="submit">Submit</button>
        </fieldset>

      </form>
    </div>
  );
}

export default App;
