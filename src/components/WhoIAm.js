

import { useEffect } from 'react'
import ClientReviews from './CientReviews'
import ContactMe from './ContactMe'
import Experience from './Experience'
import Footer from './Footer'
import FullStackDev from './FullStackDev'
import Game from './Game'
import Portfolio from './Portfolio'
import Tech from './Tech'
import TheEnd from './TheEnd'


const WhoIAm = () => {


    
    // useEffect(()=>{
    //     class GlitchEffect {
    //         constructor() {
    //             this.root = document.body
    //             this.cursor = document.querySelector(".curzr-glitch-effect")
    //             this.distanceX = 0
    //             this.distanceY = 0
    //             this.pointerX = 0
    //             this.pointerY = 0
    //             this.previousPointerX = 0
    //             this.previousPointerY = 0
    //             this.cursorSize = 15
    //             this.glitchColorB = '#00FFFF'
    //             this.glitchColorR = '#ff00ff'
        
    //             this.cursorStyle = {
    //             boxSizing: 'border-box',
    //             position: 'fixed',
    //             top: `${ this.cursorSize / -2 }px`,
    //             left: `${ this.cursorSize / -2 }px`,
    //             zIndex: '2147483647',
    //             width: `${ this.cursorSize }px`,
    //             height: `${ this.cursorSize }px`,
    //             backgroundColor: '#222',
    //             borderRadius: '50%',
    //             boxShadow: `0 0 0 ${this.glitchColorB}, 0 0 0 ${this.glitchColorR}`,
    //             transition: '75ms, transform 75ms',
    //             userSelect: 'none',
    //             pointerEvents: 'none'
    //             }
        
    //             if (CSS.supports("backdrop-filter", "invert(1)")) {
    //             this.cursorStyle.backdropFilter = 'invert(1)'
    //             this.cursorStyle.backgroundColor = '#fff0'
    //             } else {
    //             this.cursorStyle.backgroundColor = '#222'
    //             }
        
    //             this.init(this.cursor, this.cursorStyle)
    //         }
        
    //         init(el, style) {
    //             Object.assign(el.style, style)
    //             setTimeout(() => {
    //             this.cursor.removeAttribute("hidden")
    //             }, 500)
    //             this.cursor.style.opacity = 1
                
    //         }
        
    //         move(event) {
    //             this.previousPointerX = this.pointerX
    //             this.previousPointerY = this.pointerY
    //             this.pointerX = event.pageX + this.root.getBoundingClientRect().x
    //             this.pointerY = event.pageY + this.root.getBoundingClientRect().y
    //             this.distanceX = Math.min(Math.max(this.previousPointerX - this.pointerX, -10), 10)
    //             this.distanceY = Math.min(Math.max(this.previousPointerY - this.pointerY, -10), 10)
        
    //             if (event.target.localName === 'svg' || 
    //                 event.target.localName === 'a' || 
    //                 event.target.onclick !== null ||
    //                 Array.from(event.target.classList).includes('curzr-hover')) {
    //             this.hover()
    //             } else {
    //             this.hoverout()
    //             }
        
    //             this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
    //             this.cursor.style.boxShadow = `
    //             ${+this.distanceX}px ${+this.distanceY}px 0 ${this.glitchColorB}, 
    //             ${-this.distanceX}px ${-this.distanceY}px 0 ${this.glitchColorR}`
    //             this.stop()
    //         }
        
    //         hover() {
    //             this.cursorSize = 30
    //         }
        
    //         hoverout() {
    //             this.cursorSize = 15
    //         }
        
    //         click() {
    //             this.cursor.style.transform += ` scale(0.75)`
    //             setTimeout(() => {
    //             this.cursor.style.transform = this.cursor.style.transform.replace(` scale(0.75)`, '')
    //             }, 35)
    //         }
        
    //         stop() {
    //             if (!this.moving) {
    //             this.moving = true
    //             setTimeout(() => {
    //                 this.cursor.style.boxShadow = ''
    //                 this.moving = false
    //             }, 50)
    //             }
    //         }
        
    //         hidden() {
    //             this.cursor.style.opacity = 0
    //             setTimeout(() => {
    //             this.cursor.setAttribute("hidden", "hidden")
    //             }, 500)
    //         }
    //     }

    //     let cursor = new GlitchEffect();

    //     document.onmousemove = function (event) {
    //         cursor.move(event)
    //     }
    //     document.ontouchmove = function (event) {
    //         cursor.move(event.touches[0])
    //     }
    //     document.onclick = function () {
    //         if (typeof cursor.click === 'function') {
    //             cursor.click()
    //         }
    //     }
    // },[]);

    return(
        <>
            <div className="who-i-am">

                {/* <div class="curzr-glitch-effect" hidden></div> */}

                <FullStackDev/>
                <Tech/>
                <Portfolio/>
                <Experience/>
                <ClientReviews/>
                <ContactMe/>
                <TheEnd/>
                <Footer/>
                <Game/>
            </div>
        </>
    )
}

export default WhoIAm