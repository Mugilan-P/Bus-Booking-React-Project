import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from 'axios';
import React from 'react'
import { toast } from "sonner";
import "./project.css"
import { useNavigate } from "react-router-dom";


export default function ContactForm() {
  const navigation = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const data = new FormData(e.currentTarget)
    console.log({
      Name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    })
    axios.post("http://localhost:3001/complains",{
      Name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    }).then((res)=>
    {
      toast.success("Your responce saved");
    })
  };

  return (
    <div>
        <br/>
    <p style={{textAlign:"center"}}>
        <h5>
            If you have any doubts regarding booking or regarding our website please contact us<br/>
            and if you see any issues in booking bus tickets you can contact us any time<br/>
            we will help you and fix your problems. 
        </h5>
    </p>
    <p style={{textAlign:"center"}}>
        <h5>
            And if you see any busses are travelling in danger way <br/>
            inform us , we will not leak your information.<br/>
             If you want to complain busses message with bus no. and exact location.
        </h5>
    </p>
    <p style={{textAlign:"center"}}>
        <h5>
            To contact us, just fill the details in the form given bellow<br/>
            and submit it.
        </h5>
    </p><br/>
    <p style={{textAlign:"center"}}><h6>
      <h5>Email : bluebus@gmail.com</h5><br/>
      <h5>ContactInfo : 9042117381,9361095126,8825690200</h5><br/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
      <div className="container">
      <h2>Follow Us On</h2>
      <div className="social">
        <a href="#" id="share-fb" class="sharer button"><i class="fa fa-3x fa-facebook-square"></i></a>
        <a href="#" id="share-tw" class="sharer button"><i class="fa fa-3x fa-twitter-square"></i></a>
        <a href="#" id="share-li" class="sharer button"><i class="fa fa-3x fa-linkedin-square"></i></a>
        <a href="#" id="share-gp" class="sharer button"><i class="fa fa-3x fa-google-plus-square"></i></a>
        <a href="#" id="share-em" class="sharer button"><i class="fa fa-3x fa-envelope-square"></i></a>
      </div> 
      </div>
    </h6></p>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 600,
          mx: "auto",
          p: 2,
          border: "2px solid  #000000",
          borderRadius: "12px",
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#111",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
    </div>
  );
}