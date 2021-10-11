import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";

function Login({ setId }) {
  const [val, setVal] = useState("");



  const onLogin = () => {
    setId(val);
    setVal("");
  };

  const createNew = () => {
    setId(uuid());
    setVal("");
  };

  return (
    <div style={{ border: "0px solid black", width: "400px", marginTop:"50px" }}>
      <TextField
        id="outlined-basic"
        label="ID"
        variant="outlined"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />

      <div
        style={{
          border: "0px solid black",
          marginTop: "20px",
          justifyContent: "space-between",
          width: "450px",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: "20px" }}
          onClick={() => onLogin()}
        >
          Login
        </Button>
        <Button variant="contained" color="primary" onClick={() => createNew()}>
          Create A New Id
        </Button>
      </div>
    </div>
  );
}

export default Login;
