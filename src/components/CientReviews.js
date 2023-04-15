
import clientReviewsTitle from '../public/client_reviews.svg';
import chevron from '../public/chevron.svg'
import reviews from '../public/reviews.js'

const ClientReviews = () => {

    

    return (
        <>
            <h1 style={{marginTop:'15vh'}} className='niceWordsHeader'>Nice Words</h1>

            {/* <img style={{marginTop:'50px'}} src={clientReviewsTitle} className="section-title" alt="Client Reviews" ></img> */}
            <div className="reviews-container">
                {reviews.map((review,i)=>(
                    <div className={i%2===0?'review blue':'review pink'}>
                        <p>{review.content}</p>
                        <span className='review-sig'>
                            <h3>- {review.name}{review.site?',':''}</h3>
                            <a href={review.url} target="_blank">{review.site}</a>
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ClientReviews;