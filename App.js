/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement (Live Reload)
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING - Parcel will bundle our code
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm - C++ (Example - 10,000 files build in 2 sec)
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking - remove unused code from our project
 * 
 *
 *
 * Transitive Dependencies
 */


import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1"
  },
  "heading 1 for parcel"
);



const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h2"
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);


