
import myName from '../public/my_name.svg'
import fullStackDev from '../public/fullstackdev.svg'
import {useEffect} from 'react';


const Nav = () => {

    var prevScrollpos = window.pageYOffset;

    useEffect(()=>{
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.querySelector(".nav-head").classList.add('open');
            } else {
                document.querySelector(".nav-head").classList.remove('open');
            }
            prevScrollpos = currentScrollPos;
            }
    }, [])
    

    return(
        <div className='nav-head open'>
            <a className='gradient-button' href='#contact-me'>Contact Me</a>
            <a className='blog-link' href='/blog'>My Blog</a>
        </div>
    )
}

export default Nav;