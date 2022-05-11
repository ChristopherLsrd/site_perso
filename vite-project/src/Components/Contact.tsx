import React from 'react';


const Contact = () => {
    return (
        <div>
            <hr />
            <div className="contact columns is-centered is-vcentered has-text-centered">
                <div className=' column is-half'>

                    <button className='button is-medium'>
                        <a href="https://github.com/ChristopherLsrd">
                            <i className="fa-brands fa-github"></i>
                        </a>


                    </button>
                    <button className='button is-medium'>

                        <a href="https://www.linkedin.com/in/christopher-lessirard-661436172/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>

                    </button>
                    <button className='button is-medium'>
                        <a href="mailto:christopher.lessirard@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>

                    </button >

                </div>


            </div >
        </div>

    );
};


export default Contact;