import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home.jsx";
import Event from "./components/Event/Event.jsx";
import "./index.scss";
import Service from "./components/Service.jsx";
import Testimonnials from "./components/Testimonials.jsx";
import Places from "./components/Places.jsx";
import Events from "./pages/Events/Events.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />
    ),
  },
  {
    path: "/events",
    element: (
      <Events />
    )
  },

  {
    path: "about",
    element: (
      <About/>
    )
  },
  {
    path: "/contact",
    element: (
      <Contact />
    )
  },



]);

ReactDOM.createRoot(document.getElementById("root")).render(

  
  <React.StrictMode>
    
    <RouterProvider router={router} />
   
  </React.StrictMode>
);
