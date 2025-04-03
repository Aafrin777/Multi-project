// --------------------------- MainContent Component START ---------------------------

import { Routes, Route } from 'react-router-dom';

// import AboutUs from './components/AboutUs';

import Project from '../Project';
import About from '../About';
import Color from '../Color';
import ColorUs from './ColorUs';
import Router_project from './Router_project';
import Props from './Props';
import HooksTextform from './HooksTextform';
import Hooksproject from './Hooksproject';
import Firebase from '../Firebase';



const MainContent = ({ mode, toggleMode, showAlert }) => {

  return (
		<div>




      <Routes>
      {/* Routes to control which page/component is displayed based on URL */}
      {/* //we have all our project 1 and 2 in it */}
        <Route path="/Project" element={<Project  mode={mode} toggleMode={toggleMode} showAlert={showAlert}  />} />       About page
        <Route path="/About" element={<About showAlert={showAlert}  />} />       {/* About page */}


      {/* ----------------------------------Color project */}


        <Route path="/" element={<ColorUs  />} />          {/* Default homepage */}
        <Route path="/Color" element={<Color mode = {mode} toggleMode = {toggleMode} showAlert={showAlert}  />} />



      {/* ----------------------Project routes --------------------------------- */}
        <Route path="/Router_project/*" element={<Router_project />} />
{/* we are importing all this to make it visible inside Router Project also we restricted Project file only visisble at home page  */}
<Route path="/Props/*" element={<Props  />} />

<Route path="/Hooksproject/*" element={<Hooksproject mode={mode} toggleMode={toggleMode} showAlert={showAlert}  />} />

<Route path="/HooksTextform/*" element={<HooksTextform mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />

<Route path="/Firebase/*" element={<Firebase mode={mode} toggleMode={toggleMode}/>} />




</Routes>


    </div>
  );
};
// --------------------------- MainContent Component END ---------------------------

export default MainContent;