import React, { useContext } from 'react';
import Navigation from '../Components/Navigation';
import Contact from '../Components/Contact';
import logoMaupertuis from '../assets/img/lycee-maupertuis.png';
import logoIUTLannion from '../assets/img/iut_lannion.png';
import logoIUTNantes from '../assets/img/iutNantes.png';

const School = () => {
    return (
        <div className='hero is-fullheight-with-navbar'>

            <div className='hero-header'>
                <Navigation />
            </div>

            <div className="hero-body school columns is-centered is-vcentered has-text-centered is-multiline ">

                <div className='card column is-full-mobile is-3 has-text-centered '>
                    <figure className="image card-header is-inline-block is-128x128 " >
                        <div>Nantes, France <br /> <a href="https://iutnantes.univ-nantes.fr/">Site de l'IUT de Nantes</a></div>

                        <img src={logoIUTNantes} className="" />
                    </figure>

                    <h3 className='subtitle card-header-title is-centered'>Licence professionnelle MiAR</h3>
                    <div className='card-content'>
                        <p>2021-2022</p>
                        <br />
                        <ul className='is-inline-block'>
                            <li>Java</li>
                            <li>Android Studio</li>
                            <li>Go</li>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>SQL</li>

                        </ul>
                        <br /><br />
                        <p>Formation en cours</p>
                    </div>


                </div>

                <div className='card column is-full-mobile is-3 has-text-centered'>
                    <figure className="image card-header is-inline-block is-128x128" >
                        <div>Saint-Malo, France <br /> <a href="https://www.lyceemaupertuis.bzh/">Site du lycée Maupertuis</a></div>
                        <img src={logoMaupertuis} className="" />
                    </figure>
                    <h3 className='subtitle card-header-title is-centered'>BTS SNIR</h3>
                    <div className='card-content'>
                        <p>2019-2021</p>
                        <br />
                        <ul className='is-inline-block'>
                            <li>C</li>
                            <li>C++</li>
                            <li>UML</li>
                            <li>CCNA</li>
                            <li>Modèle OSI</li>
                        </ul>
                        <br />
                        <br /><br />
                        <p>Obtenu</p>
                    </div>


                </div>

                <div className='card column is-full-mobile is-3 has-text-centered'>
                    <figure className="image card-header is-inline-block is-128x128" >
                        <div>Lannion, France <br /> <a href="https://iut-lannion.univ-rennes1.fr/">Site de l'IUT de Lannion</a></div>
                        <img src={logoIUTLannion} className="" />
                    </figure>
                    <h3 className='subtitle card-header-title is-centered'>DUT Informatique</h3>
                    <div className='card-content'>
                        <p>2018-2019</p>
                        <br />
                        <ul className='is-inline-block'>
                            <li>C</li>
                            <li>Java</li>
                            <li>UML</li>
                            <li>SQL</li>
                            <li>HTML5/CSS</li>

                        </ul>
                        <br />
                        <br /><br />
                        <p>Formation non terminée</p>
                    </div>


                </div>

                <div className=' card column is-full-mobile is-3 has-text-centered'>
                    <figure className="image card-header is-inline-block is-128x128" >
                        <div>Saint-Malo, France <br /> <a href="https://www.lyceemaupertuis.bzh/">Site du lycée Maupertuis</a></div>
                        <img src={logoMaupertuis} className="" />
                    </figure>
                    <h3 className='subtitle card-header-title is-centered'>Bac STI2D</h3>
                    <div className='card-content'>
                        <p>2016-2018</p>
                        <p>Spécialité : SIN (Système d'information numérique)</p>
                        <br />
                        <ul className='is-inline-block'>

                            <br />

                            <li>Arduino</li>
                            <br />
                            <br />
                            <br />
                        </ul>

                        <br /><br />
                        <p>Obtenu : Mention Bien</p>
                    </div>


                </div>

            </div >

            <div className='hero-foot'>
                <Contact />
            </div>

        </div >


    );
};

export default School;