import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    const [isActive, setisActive] = React.useState(false);
    return (


        <div className="navigation">
            <nav className="navbar">
                <div className='navbar-brand'>
                    <NavLink to={"/"} className="navbar-start" >
                        <h2 className="navbar-item title">Christopher Lessirard</h2>
                    </NavLink>
                    <a
                        onClick={() => {
                            setisActive(!isActive);
                        }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="test"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>


                <div className="navbar-start">
                    <div className="navbar-item">

                    </div>

                </div>
                <div id="test" className={` navbar-menu  ${isActive ? "is-active" : ""}`}>
                    <div className='navbar-end'>
                        <NavLink to={"/"} className="navbar-item">
                            <p>Accueil</p>
                        </NavLink>
                        <NavLink to={"/school"} className="navbar-item">
                            <p>Formations</p>
                        </NavLink>
                        <NavLink to={"/experiences"} className="navbar-item">
                            <p>Expériences</p>
                        </NavLink>
                        <NavLink to={"/projects"} className="navbar-item">
                            <p>Projets</p>
                        </NavLink>
                        <NavLink to={"/about"} className="navbar-item">
                            <p>A propos</p>
                        </NavLink>
                    </div>



                </div>

            </nav >
            <hr />
        </div >

    );
};


export default Navigation;