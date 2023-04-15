
import reviews from '../public/reviews.js'
import chevron from '../public/chevron.svg'
import {useEffect} from 'react';
import $ from 'jquery';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




const ReviewSlider = () => {



    return(
        <>
            {/* <h1 style={{marginTop:'15vh'}}>Nice Words</h1>
            <div className="review-slider">
                {reviews.map((review,i)=>(
                    <div className={i%2===0?'review blue':'review pink'}>
                        <p>{review.content}</p>
                        <span className='review-sig'>
                            <h3>- {review.name}{review.site?',':''}</h3>
                            <a href={review.url} target="_blank">{review.site}</a>
                        </span>
                    </div>
                ))}
            </div> */}
            <div className="slide-container">
            <h1 style={{marginTop:'15vh'}} className='niceWordsHeader'>Nice Words</h1>
            <h3 style={{marginBottom:'5vh'}} className='mobileSwipe'>(swipe)</h3>

                <Slide>
                {reviews.map((review,i)=>(
                    <div className='review-slide gradient-slide'>
                        <p>{review.content}</p>
                        <span className='review-sig'>
                            <h3>- {review.name}{review.site?',':''}</h3>
                            <a href={review.url} target="_blank">{review.site}</a>
                        </span>
                    </div>
                ))}
                </Slide>
            </div>
      {/* <div className="slide-container">
        <Slide>
            <div key={123}>
                ASKDnASLKDN
            </div>
            <div key={123}>
                ASKDnASLKDN
            </div>           <div key={123}>
                ASKDnASLKDN
            </div>           <div key={123}>
                ASKDnASLKDN
            </div>
        </Slide>
      </div> */}
        </>
    )
};

export default ReviewSlider;