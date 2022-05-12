import React, { useContext } from 'react';
import Navigation from '../Components/Navigation';
import Contact from '../Components/Contact';
import logoBlanchisserie from '../assets/img/blanchisserie.png'
import logoSesame from '../assets/img/sesame.png'

const Experiences = () => {
    return (
        <div>

            <div className='hero is-fullheight-with-navbar'>

                <div className='hero-header'>
                    <Navigation />
                </div>

                <div className="hero-body experiences columns is-centered is-vcentered has-text-centered is-multiline ">

                    <div className='card column is-full-mobile is-4 has-text-centered'>
                        <figure className="image card-header is-inline-block is-128x128 " >
                            <div>Quévert, France <br /> <a href="https://sesame-informatique.com/">Site de Sésame Informatique</a></div>

                            <img src={logoSesame} className="" />
                        </figure>

                        <h3 className='subtitle card-header-title is-centered'>Développeur junior</h3>
                        <div className='card-content'>
                            <p>Septembre 2021 - Septembre 2022</p>
                            <br />
                            <p className='subtitle is-3'>Windev</p>
                            <ul className='is-inline-block'>
                                <li>Webisation de logiciels</li>
                                <li>Ajout d'un module de scan de code EAN sur une application d'inventaire</li>
                                <li>Création d'un site web de prise de commande pour l'évènement "Cozigou Circus"</li>
                                <li>Synchronisation de l'agenda Outlook et de l'agenda du logiciel Stim'vente terrain via l'API Microsoft Graph</li>
                            </ul>
                            <br /><br />
                            <p className='subtitle is-8'>Alternance</p>
                        </div>


                    </div>

                    <div className='card column is-full-mobile is-4 has-text-centered is-offset-1'>
                        <figure className="image card-header is-inline-block is-128x128" >
                            <div>Saint-Jouan-des-Guêrets, France <br /> <a href="https://www.blanchisserie-emeraude.fr/">Site de la blanchisserie</a></div>
                            <img src={logoBlanchisserie} className="" />
                        </figure>
                        <h3 className='subtitle card-header-title is-centered'>Employé de lingerie</h3>
                        <div className='card-content'>
                            <p>Juillet 2021 - Août 2021</p>
                            <p>Juillet 2020 - Août 2020</p>
                            <p>Juillet 2019 - Août 2019</p>
                            <p>Juillet 2018 - Août 2018</p>
                            <br />
                            <ul className='is-inline-block'>
                                <br />
                                <br />

                                <li>Rangement de serviettes dans des chariots</li>
                                <br />
                                <br /><br />
                            </ul>
                            <br /><br />
                            <p className='subtitle is-8'>Job d'été</p>
                        </div>


                    </div>


                </div >

                <div className='hero-foot'>
                    <Contact />
                </div>

            </div >




        </div >
    );
};

export default Experiences;