import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export default function Login() {
  const [message, setMessage] = useState("");
  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    axios
      .get(
        "http://localhost:3001/users?email=" +
          data.get("email") +
          "&password=" +
          data.get("password")
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.length == 0) {
          toast.error("Invalid email/password");
        } else {
          toast.success("Successfully LoggedIn");
          navigation("/profile");
        }
      });

    // axios.post("http://localhost:3001/bus",{
    //   email: data.get('email'),
    //   password: data.get('password'),
    // })
  };

  return (
    <div className="body">
      <Box
        sx={{
          background: "rgb(249,250,251)",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container
          component="main"
          sx={{
            padding: "3rem 1.5rem",
          }}
        >
          <Paper
            style={{
              maxWidth: "500px",
              margin: "auto",
              padding: "1.5rem 2rem",
            }}
            variant="outlined"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  m: 1,
                  p: 2,
                  bgcolor: "secondary.main",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  style={{ width: "200%", height: "200%" }}
                  src="https://img.freepik.com/premium-vector/design-logo-travel-bus-vector-illustration_831416-160.jpg?w=826"
                />
              </Avatar>
              <Box
                component="form"
                // noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I accept the terms and conditions."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      to="/register"
                      variant="body2"
                      onClick={() => navigation("/register")}
                    >
                      Don't have an account?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </div>
  );
}
