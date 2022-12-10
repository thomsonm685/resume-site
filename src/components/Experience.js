
import experience from '../public/experience.svg'

const Experience = () => {

    return(
        <>
            <img src={experience} className="section-title" alt="Experience" />
            <div className='timeline-item'>
                <a className='timeline-title' href='https://www.upwork.com/freelancers/~01a2b64c3b1fd3ca1b' target="_blank">Part-Time Freelance:</a>
                <p>Feb, 2019 - Nov, 2019</p>
            </div>
            <div className='timeline-item'>
                <a className='timeline-title' href='https://www.upwork.com/freelancers/~01a2b64c3b1fd3ca1b' target="_blank">Full-Time Freelance:</a>
                <p>Nov, 2019 - Current</p>
            </div>
            <div className='timeline-item'>
                <a className='timeline-title' href='https://takoagency.com' target="_blank">Tako Agency:</a>
                <p>Mar, 2022 - Current</p>
            </div>
            <p className='exp-stack-desc'>
                I have four years of programming experience, while freelancing that entire time.
                Those four years have always included Shopify and Javascript/Node.js. 
            </p>
        </>
    )
}

export default Experience