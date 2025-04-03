//       cd my-app
//        npm start

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import React, { useState } from 'react'; // Correctly importing React and useState together
// import AboutUs from './components/AboutUs';
import Alert from './Alert';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import Contact from './Contact';


const App = () => {
  return (
    <Router>
      <AppContent /> {/*  Wrapping AppContent inside Router */}
    </Router>
  );
};



const AppContent = () => {  // Wrap the logic inside another component
  const location = useLocation(); // Get current URL path
  //enable dark mode
  const [mode, setMode] = useState("light"); {/* whether dark mode is enabled or not */}

  // Alert state
  const [alert, setAlert] = useState(null);

    // Function to show alerts
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

   // Hide alert after 3 seconds
   setTimeout(() => {
    setAlert(null);
  }, 12000);
};


const toggleMode = () =>{
  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = '#17353d';
    showAlert(" dark mode has been activating", "success ")
  }                              //--CUZ its state we have to put inside bracket
  else{
    setMode("light");
    document.body.style.backgroundColor = 'white';
    showAlert(" light mode has been activating", "success ")
  }
};




  return (
    <>

    <Navbar title="My Navbar" mode={mode} toggleMode={toggleMode} />

    			 {/* Render Project component ONLY on homepage */}
           {location.pathname === "/" && (
        <FrontPage mode={mode} toggleMode={toggleMode} showAlert={showAlert} />

      )}



      {/* {/* forth project---------- */}
<Alert alert={alert}/>

<Routes>
        <Route path="/*" element={<MainContent mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />


<Route path="/Contact/*" element={<Contact  mode={mode} toggleMode={toggleMode}  />} />

      </Routes>

</>
  );
}


export default App;





/*
-> crt + f = for changes

PROPS :"my navbar" , "about us"

-> we are using props here we we can do some changes or maybe reuse this code with some change in futur  :we can pass properties to components with the help of properties components can render itself like we can fill empty pg as we want

<Navbar  title = "my navbar"  about= "about us"/>
we are using props here we we can do some changes or maybe reuse this code with some change in futur  :we can pass properties to components with the help of properties components can render itself like we can fill empty pg as we want

-> if we are using function base componenets we don't have to import react

  HOOKS : is function base components


why /*
In React Router, if a parent route has children (nested routes), it must have a trailing /*.
Without /*, the parent route only matches exactly /Router_project and not any deeper paths like /Router_project/child.

If you plan to have child routes inside /Router_project, you need to add a /* at the end of the route path.


*/