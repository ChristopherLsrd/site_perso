import React, { useContext } from 'react';
import Navigation from '../Components/Navigation';
import photo from '../assets/img/circle_photo.jpg'
import Contact from '../Components/Contact';


const Home = () => {

    return (
        <div className='hero is-fullheight-with-navbar'>
            <div className='hero-header'>
                <Navigation />
            </div>


            <div className="hero-body home columns is-centered is-vcentered has-text-centered" >
                <div className="column is-half">

                    <figure className="image is-inline-block" >
                        <img src={photo} className="is-rounded" />
                    </figure>
                    <p className="">Étudiant en licence professionnelle MiAR à l'IUT de Nantes, agé de 22 ans, venant de Saint-Malo et voulant travailler dans le développement logiciel. J'aime lire, la musique, le football et les jeux vidéos. </p>
                    <button type="button" className="button is-large">

                        <a href="./assets/files/CV_ChristopherLessirard.pdf">
                            <span className="icon">
                                <i className="fa-solid fa-file-pdf"></i>
                            </span>
                            <span>Mon CV</span>

                        </a>
                    </button>


                </div >

            </div >
            <div className='hero-foot'>
                <Contact />
            </div>



        </div >
    );
};

export default Home;