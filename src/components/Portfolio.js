
import portfolioText from '../public/portfolio_text.svg'
import PortfolioItem from './PortfolioItem';

import closeIcon from '../public/close_icon.svg'
import { useEffect, useState } from 'react';
import chevron from '../public/chevron.svg'
import portofolioApps from '../public/portfolio_apps';
import portofolioSites from '../public/portfolio_site_work';




const Portfolio = () => {

    const [details, setDetails] = useState({title:'',description:'',link:'',images:[]});

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    useEffect(()=>{
        document.querySelectorAll('.portfolio-items-container')[0].addEventListener('mousedown', mouseDownHandler);
        document.querySelectorAll('.portfolio-items-container')[1].addEventListener('mousedown', mouseDownHandler);
    },[])

    const mouseDownHandler = function (e) {

        const ele = e.currentTarget;
        pos = {
            // The current scroll
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        ele.addEventListener('mousemove', mouseMoveHandler);
        ele.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        const ele = e.currentTarget;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function (e) {
        const ele = e.currentTarget;

        ele.removeEventListener('mousemove', mouseMoveHandler);
        ele.removeEventListener('mouseup', mouseUpHandler);
    
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');
    };


    const closeModal = () => {
        document.querySelector('.portfolio-details').classList.remove('open','pink','blue');
        document.querySelector('.overlay').classList.remove('open');
    }


    const scrollIt = (direction, num) => {
        let scroll = document.querySelectorAll(`.portfolio-items-container`)[num].scrollLeft;
        let scrollAmount = document.querySelector('.portfolio-item').offsetWidth + (parseFloat(getComputedStyle(document.querySelector('.portfolio-item')).marginRight) * 2);
        direction==="right" ? scroll += scrollAmount : scroll -= scrollAmount;
        if(scroll<0) scroll = 0;
        if(scroll>document.querySelector("#root > div > div.main-site.open > div > div.portfolio-section > div:nth-child(2)").scrollWidth) scroll = document.querySelector("#root > div > div.main-site.open > div > div.portfolio-section > div:nth-child(2)").scrollWidth        
        console.log('scrollAmount:', scrollAmount);
        console.log('scroll:', scroll);
        document.querySelectorAll(`.portfolio-items-container`)[num].scroll({
            left: scroll,
            behavior: 'smooth'
        });
    }
    
    return(
        <>
            <div className="portfolio-section">
                <img src={portfolioText} className="portfolio-text section-title" alt="portfolio-header" />
                <div className="portfolio-items-container">
                    {portofolioApps.map((item)=>(
                        <PortfolioItem 
                            title={item.title} 
                            banner={item.banner} 
                            setDetails={setDetails} 
                            description={item.description}
                            link={item.url}
                            images={item.images} 
                            glow="blue"
                        />
                    ))}
                    
                </div>
                <h3 className='portfolio-subheading'>APPS</h3>
                {/* <div className='portfolio-chevys'>
                    <img src={chevron} className="chevron-left" alt="chevron-left" onClick={()=>scrollIt('left', 0)} />
                    <h3 className='portfolio-subheading'>APPS</h3>
                    <img src={chevron} className="chevron-right" alt="chevron-right" onClick={()=>scrollIt('right', 0)} />
                </div> */}
                <div className="portfolio-items-container">
                    {portofolioSites.map((item)=>(
                            <PortfolioItem 
                                title={item.title} 
                                banner={item.images[0]} 
                                setDetails={setDetails} 
                                description={item.description}
                                link={item.url}
                                images={item.images} 
                                glow="pink"
                            />
                    ))}
                </div>
                <h3 className='portfolio-subheading'>SITE WORK</h3>
                {/* <div className='portfolio-chevys'>
                    <img src={chevron} className="chevron-left" alt="chevron-left" onClick={()=>scrollIt('left', 1)} />
                    <h3 className='portfolio-subheading'>SITE WORK</h3>
                    <img src={chevron} className="chevron-right" alt="chevron-right" onClick={()=>scrollIt('right', 1)} />
                </div>             */}
            </div>
            <div className='portfolio-details'>
                <img className="closeModal" src={closeIcon} onClick={closeModal}></img>
                <div className="portfolio-details-content">
                    <h3>{details.title}</h3>
                    <br></br>
                    <p>{details.description}</p>
                    {details.link?
                    <a href={details.link} target="_blank" class="portfolio-link">Visit The Site</a>
                    :''}
                    <h3 className='portfolio-subheading'>More Images</h3>
                    <div className='portfolio-images'>{details.images.map((img)=>(
                        <img src={img} alt="portfolio-details-image" />                        
                    ))}
                    </div>
                </div>
            </div>
            <div className="overlay" onClick={closeModal}></div>
        </>
    )
}

export default Portfolio;