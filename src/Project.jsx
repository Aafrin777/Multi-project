import React, { useState } from 'react'; // Correctly importing React and useState together

import Props from './components/Props'
import HooksTextform from './components/HooksTextform';
import Hooksproject from './components/Hooksproject';



const Project = (props) => {

  return (
    <>
        <div
        style={{
          color: props.mode === 'dark' ? 'white' : 'black', // Apply white text in dark mode
          backgroundColor: props.mode === 'dark' ? '#17353d' : 'white', // Background changes
        }}>

       <Props title = "i AM USING PROPS FOR TITLE "/>


       {/* -------Project 1 convertor with hooks-- */}
       <div className="container"
        style={{
          backgroundColor: props.mode === 'dark' ? '#0f1b35' : '#f8f9fa' ,
        border: '2px solid white',marginTop: '30px', }}>

       <Hooksproject
       heading ="Project 1 convertor with hooks"
       mode={props.mode} // Pass mode to child components
        />  {/*we set mode to balance color*/}
       </div>
{/* -------------END-------------------------- */}


       {/* adding more features in hooks projrct */}
       <div className="container"
 style={{ backgroundColor: props.mode === 'dark' ? '#0f1b35' : '#f8f9fa' ,   border: '2px solid white' ,marginTop: '30px',

 }}>
<HooksTextform showAlert={props.showAlert}  heading ="enter the text to write"
        mode={props.mode} // Pass mode to child components
        /> {/*we set mode to balance color*/}
</div>

{/* -------------END-------------------------- */}

    </div>
    </>
  )
}

export default Project
