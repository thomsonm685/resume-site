
import myName from '../public/my_name.svg'
import fullStackDev from '../public/fullstackdev.svg'

const FullStackDev = () => {
    
    return(
        <>
            <img src={myName} className="my-name" alt="my name" />
            <img src={fullStackDev} className="full-stack-dev section-title" alt="full-stack-dev" />
            <p className='full-stack-desc'>
                I'm a full-stack developer based in San Antonio Texas. I currently work 
                freelance/contract as well as developing public apps on the side. I prefer 
                working on web-applications, stepping away from purely front-end work in favor of 
                true, full-stack work. Most my work has a connection with Shopify, since it's 
                easier to sell yourself in an ecosystem. I've been freelance for almost 4 years, and 
                in that time attained many freelance clients, kept top-rated reviews, and held 
                a contract lead developer position.
            </p>
        </>
    )
}

export default FullStackDev;