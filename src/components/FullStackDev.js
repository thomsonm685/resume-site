
import myName from '../public/my_name.svg'
import fullStackDev from '../public/fullstackdev.svg'

const FullStackDev = () => {
    
    return(
        <>
            <img src={myName} className="my-name" alt="my name" />
            <img src={fullStackDev} className="full-stack-dev section-title" alt="full-stack-dev" />
            <p className='full-stack-desc'>
                I am a full-stack developer based in San Antonio Texas. I currently work on a
                freelance and contract basis, as well as developing public apps on the side. I prefer 
                working on web-applications, stepping away from purely front-end work in favor of 
                true, full-stack work. The majority of my work has a connection with Shopify, as it's 
                easier to work within an ecosystem. I have been freelancing for 4 years, and 
                in that time kept top-rated reviews, and held 
                a contract lead developer position.
            </p>
        </>
    )
}

export default FullStackDev;