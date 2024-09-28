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

import { useState } from "react";


function App(){
  const[name, setName]= useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return(
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
     <div className="Field">
      <label>Name</label>
      <input type="text"
       placeholder="Name" 
       name="name" 
       value={name} onChange={e => setName(e.target)} />
     </div>
     <button type="submit">Submit</button>
        </fieldset>

      </form>
    </div>
  );
}

export default App;
