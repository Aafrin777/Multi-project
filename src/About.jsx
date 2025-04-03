// ENABLE DARK MODE with the help Of STATE
import React, { useState } from 'react'


export default function About(props) {

  /* let myStyle = {
  this is how we style but to enable dark mode on switch

  color:'black',
        backgroundColor:'white'
}
*/

    //  const, [state, setstates] = useState(intialState)
    const [myStyle, setMyStyle] = useState({
      color:'black',
        backgroundColor:'white'
    })

    //we can use more than one state
    const [btntext, setBtnText] = useState("Enable Dark MODE")

    //to put functionality on button
const toggleStyle =() => {
  if(myStyle.color === 'black'){
        setMyStyle({
            color:'white',
            backgroundColor:"black",
            border:"1px solid white"
        })
        setBtnText("Enable Light MODE")
        props.showAlert("Dark mode enabled", "success");
    }

    else{
      setMyStyle({
            color:'black',
            backgroundColor:"white"
        })
        setBtnText("Enable Dark MODE")
        props.showAlert("Light mode enabled", "success");
    }
}

    return (
      <>

      {/* mystyle is object */}
    <div className='container' style={myStyle}>
        <h2 className ="my-2">ABOUT US</h2>

      <div className="accordion" id="accordionExample"  style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  </div>
<div className="btn-container my-3">
  <button onClick={toggleStyle} type="button" className="btn btn-dark">{btntext}</button>
</div>

    </div>
    </>
  )
}
