
import { useEffect } from 'react';
import pressStart from '../public/press_start.svg'

const Intro = () => {

    useEffect(()=>{
        document.body.style.cursor = 'pointer';
        window.addEventListener('click', openSite);
        // Execute a function when the user presses a key on the keyboard
        window.addEventListener("keypress", function(event) {
            // If the user presses the "Enter" key on the keyboard
            if (["Enter", "Return", "Space", " ", "Spacebar"].includes(event.key)) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                openSite();
            }
        });
    },[])

    const openSite = () => {
        document.body.style.cursor = 'auto';
        document.querySelector('.intro-container').classList.add('close');
        document.querySelector('.main-site').classList.add('open');
        window.removeEventListener('click', openSite);
    }
        
    
    return(
        <div className="intro-container">
            <p class="glitch">
                <span aria-hidden="true">Press Start</span>
                Press Start
                <span aria-hidden="true">Press Start</span>
            </p>
            {/* <img src={pressStart} className="press-start" alt="Press-Start" /> */}
        </div>
    )
}

export default Intro;