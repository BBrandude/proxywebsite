import React, {useState, useEffect} from "react";
import axios from "axios";

function Quotes() {
  


  const [email, setEmail] = useState('')

  useEffect(() => {
    // axios.post("http://localhost:3001", {user: navigator.userAgent} ).then(response => {
    //   console.log(response)
    // });
    
  });
  
  

  
return (
    <div>
     <form onSubmit={function(){
        axios.post("http://localhost:3001", {email: email})
     }}>
        
          Email:
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
          Password:
          <input type="text" name="hi"/>
        <input type="submit" value="Submit" />
      </form>


 
    </div>
  )
}
export default Quotes;