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



// * instead of using createElement we can use JSX

// ! JSX => React.createElement => Object => HTML(React DOM)

const heading2 = <h1 id="tittle" key="h2"> Sumit is now in JSX</h1>



// * Components  ==> they are two types of components
//  1. Function Component -> It is a new way of writing a component.
//  2. Class Component -> It is a old way of writing a component.

// * Function Component

// ! Name of component should be in Capital Letter -> convention not mandatory

const HeaderComponents1 = () => {
  return (
    <div>
      <h1> Hey sumit is in another components </h1>
    </div>
  );
};

const HeaderComponents = () => {
  return (
    <div>
      {console.log("Mai Betichod")} {/* use JavaScript in Function Component */}

      {heading2}    {/* use ReactElement in Function Component */}

      {/*Function Component in Fun. Component called component composition*/}
      <HeaderComponents1 /> 

      <h1> Hey sumit is in components </h1>
      <h2> Again in h2 tag</h2>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading2);

root.render(<HeaderComponents />);

