import React from 'react'
import { Link } from 'react-router-dom'; // Import Link for navigation


const AboutUs = () => {


  return (
    <>
  <div className='about'>
        {/* Use Link to navigate to the About page */}
        <Link to="/About" className="btn btn-primary mx-5 my-3">
          Go to About
        </Link>
      </div>
    </>
  )
}

export default AboutUs
