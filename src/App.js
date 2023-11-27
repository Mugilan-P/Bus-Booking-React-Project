import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./Project/bookingpage";
import Home from "./Project/homepage";
import Login from "./Project/loginformproject";
import Navigation from "./Project/navbar";
import Register from "./Project/registerproject";

import { Toaster } from "sonner";
import ContactForm from "./Project/contactus";
import Profile from "./Project/profilepage";

function App() {
  return (
    // <Album/>
    // <Login/>
    <BrowserRouter>
      <Navigation />
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contactus" element={<ContactForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
