//Router

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ColorUs = () =>{

	return (
		<>
			 <div className='Color'>
								{/* Use Link to navigate to the About page */}
								<Link to="/Color" className="btn btn-primary mx-5 my-1"  >
									Go to Color
								</Link>
							</div>
		</>
	)
}

export default ColorUs

