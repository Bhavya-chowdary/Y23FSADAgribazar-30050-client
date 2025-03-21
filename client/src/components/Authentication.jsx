import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Auth = ({ setUser }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === "admin@gmail.com") {
      setUser("admin");
      navigate("/admin");
    } else if (email.includes("@gmail.com")) {
      setUser("user");
      navigate("/user");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
      <Typography variant="h4">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mt: 2 }} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ mt: 2 }} />
      {isSignUp && <TextField label="Confirm Password" type="password" sx={{ mt: 2 }} />}
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>Submit</Button>
      <Button onClick={() => setIsSignUp(!isSignUp)} sx={{ mt: 1 }}>
        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </Button>
    </Box>
  );
};

export default Auth;
