import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Login from "./Components/Pages/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Single from "./Components/Pages/SinglePost/Single";
import WritePost from "./Components/Pages/WritePost/WritePost";
import Settings from "./Components/Pages/Settings/Settings";

import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"; // ! == Swtich replaced with Routes
import Contact from "./Components/Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Parallax } from "react-parallax";

function App() {
  const user = true;
  return (
    <Parallax blur={{min: -15, max: 15}} bgImage="assets/image/backgroundImg.jpg" bgImageAlt="background" strength={-200}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <WritePost /> : <Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Parallax>
  );
}

export default App;
