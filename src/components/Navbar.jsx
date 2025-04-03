
import React  from 'react'
import { Link } from 'react-router-dom';
import "../index.css";

export default function Navbar(props) {
  return (
    <>
                                           {/* to convert nav into dark */}
  <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>


  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    {/* props: */}
    <a className="logo1-text" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Router_project">Router</Link>
            </li>
          

        <li className="nav-item">
    <a className="nav-link" href="/">{props.aboutText}</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>

      </ul>

        {/* green = success , primary = blue , danger = red */}

        <div className={`form-check form-switch text ${props.mode ==='light'?'dark':'light'}`}>    {/*  adding beacket will make it javascript*/}

  <input className="form-check-input"
  onClick={props.toggleMode}
  type="checkbox"
  role="switch"
  id="flexSwitchCheckDefault" />

  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}

//EXTENSION: Auto rename tag help change tag both side

//props.mode ==='light'?'dark':'light' if mode is light turn dark otherwise light