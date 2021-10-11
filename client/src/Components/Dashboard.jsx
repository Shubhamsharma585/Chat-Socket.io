import React from 'react'
import Button from "@mui/material/Button";



function Dashboard({id}) {


    const onLogout = () => {
        localStorage.removeItem("user_id")
    }


    

    return (
        <div>
         <div style={{border:"1px solid black", width:"60%", height:"500px", margin:"auto", marginTop:"50px", marginBottom:"50px"}}>

         </div>
         <div>

         </div>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: "20px" }}
          onClick={() => onLogout()}
        >
          Logout
        </Button>
        </div>
    )
}

export default Dashboard
