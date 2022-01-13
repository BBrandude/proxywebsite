import React, {useState, useEffect} from "react";
import axios from "axios";

function Quotes() {
  
  const [text, setText] = useState("");

  useEffect(() => {
    axios.post("http://localhost:3001", {user: navigator.userAgent} ).then(response => {
      console.log(response)
    });
    
  });


  // function getQuote() {
  //   axios.get("http://localhost:3002").then(response => {
  //     setText(response.data);
  //   });
  // }
return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
export default Quotes;