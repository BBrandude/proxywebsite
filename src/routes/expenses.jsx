import React, {useState, useEffect} from "react";
import axios from "axios";

function Quotes() {
  
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote()
    
  });


  function getQuote() {
    axios.get("http://localhost:3001/",  { crossdomain: true }).then(response => {
      setText(response.data);
      setAuthor(response.data);
    });
  }
return (
    <div>
      <h1>{text}</h1>
      <h3>{"-" + author}</h3>
    </div>
  )
}
export default Quotes;