import css3 from '../public/css3.svg'
import express from '../public/express_js.svg'
import html from '../public/html.svg'
import javascript from '../public/javascript.svg'
import jquery from '../public/jquery.svg'
import mongodb from '../public/mongodb.svg'
import node from '../public/node_js.svg'
import react from '../public/react.svg'
import dots from '../public/dotdotdot.svg'
import shopify from '../public/shopify.svg'
import tech from '../public/tech.svg'
import { useEffect } from 'react'

const Tech = () => {

    useEffect(()=>{
        [...document.querySelectorAll(".tech-logo")].forEach(icon=>icon.addEventListener('mouseover', function(event){
            if(!['matrix(1, 2.44929e-16, -2.44929e-16, 1, 0, 0)', 'none'].includes(window.getComputedStyle(this).transform)){
                return
            } ;
            this.animate([
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(-360deg)' },
            ], 
            {
                duration: 2000,
                easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                iterations: 1,
                fill: 'forwards'
            }
        );
        }))
    },[])

    const toggleSkills = () => {
        document.querySelector('.skill-list').classList.toggle('open');
    }
    
    return(
        <>
            <h1 style={{marginTop:'15vh'}}>My Tech</h1>
            {/* <img src={tech} className="tech-text section-title" alt="text" /> */}
            <div className="tech-icons">
                <img src={node} className="tech-logo" alt="full-stack-dev" />
                <img src={css3} className="tech-logo" alt="full-stack-dev" />
                <img src={express} className="tech-logo" alt="full-stack-dev" />
                <img src={html} className="tech-logo" alt="full-stack-dev" />
                <img src={javascript} className="tech-logo" alt="full-stack-dev" />
                <img src={jquery} className="tech-logo" alt="full-stack-dev" />
                <img src={mongodb} className="tech-logo" alt="full-stack-dev" />
                <img src={react} className="tech-logo" alt="full-stack-dev" />
                <img src={shopify} className="tech-logo" alt="full-stack-dev" />
            </div>
            {/* <p className='full-stack-desc'>
                I've worked with many different tech stacks. From dabbling with Ruby and PHP, to intense applications of Node.JS. Here's the breakdown:
            </p>   */}
            <h3 className='more-deets' onClick={toggleSkills}>More Details</h3>
            <div className="skill-list">
                <div className="skills-container">
                    <h3>Experienced</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Node.JS</li>
                        <li>Express.JS</li>
                        <li>React.JS</li> 
                        <li>Shopify Liquid</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="skills-container">
                    <h3>Proficient</h3>
                    <ul>
                        <li>JQuery</li>
                        <li>SQL Databases</li>
                        <li>Koa.JS</li>
                        <li>Next.JS</li>
                        <li>Ruby</li>
                    </ul>
                </div>
                <div className="skills-container">
                    <h3>Worked With</h3>
                    <ul>
                        <li>PHP</li>
                        <li>Rails</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Tech;