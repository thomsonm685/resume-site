

import contactMeTitle from '../public/contact_me.svg';
import linkden from '../public/linkden.svg';
import email from '../public/email.svg';
import upwork from '../public/upwork.svg';
import mailTruck from '../public/mail_truck.svg';
import { useEffect } from 'react';



const ContactMe = () => {

    // useEffect(()=>{
    //     document.querySelector('.mail-truck').addEventListener('click', (e)=>{
    //         let element = e.currentTarget;
    //         console.log(getComputedStyle(element).transform);
    //         element.animate([
    //             { transform: 'rotate(0deg)'},
    //             { transform: 'rotate(-360deg)'},
    //         ], 
    //         {
    //             duration: 2000,
    //             easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    //             iterations: 1,
    //             fill: 'forwards'
    //         }
    //     );
    //     })
    // },[])

    return (
        <>
            {/* <img style={{marginTop:'50px'}} src={contactMeTitle} className="section-title" alt="Contact Me" ></img> */}
            <h1 style={{marginTop:'15vh'}}>Contact Me</h1>
            <a id='contact-me'></a>
            <div className='contact-icons'>
                <a className='contact-icon' target="_blank" href='https://www.linkedin.com/in/michael-t-b3189015b/'>
                    <img src={linkden} alt="Linkden" ></img>
                </a>
                <a className='contact-icon' target="_blank" href='mailto:dev@michaelbuildsapps.com'>
                    <img src={email} alt="Email" ></img>
                </a>
                <a className='contact-icon' target="_blank" href='https://www.upwork.com/freelancers/~01a2b64c3b1fd3ca1b'>
                    <img src={upwork} alt="Upwork" ></img>
                </a>
            </div>
            {/* <img className='mail-truck' src={mailTruck} alt="Mail Truck" ></img>
            <div className="road">
                <div className='line'></div>
            </div> */}
        </>
    )
}

export default ContactMe