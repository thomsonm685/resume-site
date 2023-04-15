
import myName from '../public/my_name.svg'
import fullStackDev from '../public/fullstackdev.svg'

const FullStackDev = () => {
    
    return(
        <div className='gradient-background hero'>
            <img src={myName} className="my-name" alt="my name" />
            {/* <img src={fullStackDev} className="full-stack-dev section-title" alt="full-stack-dev" /> */}
            <h1 style={{marginTop:'0px'}}>Complex Ideas, Elegant Solutions.</h1>
            <p style={{width:'85%', minWidth:'250px'}}>
            Not an agency, collective, or even enough people to carry a (sane) conversation. This is Shopify development offered by one US-based developer with years of experience. Singular attention and clear communication is guaranteed. I only take on one project at a time, allowing me to outpace agencies at a fraction of their price.
            </p>
            {/* <p className='full-stack-desc'>
                I am a full-stack developer based in San Antonio Texas. I currently work on a
                freelance and contract basis, as well as developing public apps on the side. I prefer 
                working on web-applications, stepping away from purely front-end work in favor of 
                true, full-stack work. The majority of my work has a connection with Shopify, as it's 
                easier to work within an ecosystem. I have been freelancing for 4 years, and 
                in that time kept top-rated reviews, and held 
                a contract lead developer position.
            </p> */}
        </div>
    )
}

export default FullStackDev;