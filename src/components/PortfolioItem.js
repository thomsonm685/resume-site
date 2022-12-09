

const PortfolioItem = ({title, banner, setDetails, images, link, description, glow}) => {

    const portfolioDetails = () => {
        setDetails({
            title,
            description,
            images,
            link
        });
        document.querySelector('.portfolio-details').classList.add('open',glow);
        document.querySelector('.overlay').classList.add('open');
    }

    return(
        <div className="portfolio-item" onClick={portfolioDetails}>
            <span className="portfolio-see-more">
             {/* More About {title} */}
            </span>
            <div className="portfolio-item-inner" style={{backgroundImage:`url(${banner})`}}>
                {/* <p>{ title }</p> */}
            </div>
        </div>
    )
}

export default PortfolioItem;