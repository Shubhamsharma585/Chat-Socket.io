import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";


function Home() {

  const [id, setId] = useState("");
  const [isLoggedin, setIsLoggedIn] = useState(false)


  useEffect(() => {
    const tok = localStorage.getItem("user_id")
    if(tok)
    {
        console.log("1")
        setIsLoggedIn(true);
    }
    else
    {  
        if(id)
        {
            console.log("2")
            localStorage.setItem("user_id",id);
            setIsLoggedIn(true);
        }
    }
    console.log(tok)
  },[id])


  return (
    <div>
      {isLoggedin? <Dashboard id={id}/>:<Login setId={setId}/>}
    </div>
  );
}

export default Home;
