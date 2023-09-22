import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Components/Header"; // Default Import
import Body from "./Components/Body";
import Footer from "./Components/Footer";

// import { Tittle } from './Components/Header'; // !Named Import


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);

