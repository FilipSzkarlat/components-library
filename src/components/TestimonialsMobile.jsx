import quote from './testimonialAssets/quote.svg'
import dotPatternMobile from './testimonialAssets/DotPatternMobile.svg'
import mark from './testimonialAssets/Mark.svg'

export default function TestimonialsMobile({picture, children, name, title, company}) {
    return ( picture ?
        <div className="testimonial_mobile_container">
            <img className='dotPatternMobile' src={picture} alt="Testimonial" />
            <div className="testimonial_mobile_content">
                <img src={quote} alt="Quote" />
                <div className="testimonial_mobile_text">
                    {children}
                </div>
                <div className="testimonial_mobile_info">
                    <h3>{`${name ? name : 'Name Surname'}`}</h3>
                    <p>{`${company ? company : 'Company'}, ${title ? title : 'Title'}`}</p>
                </div>
            </div>
        </div>
    :
        <div className="testimonial_mobile_container_no_picture">
            <img className='dotPatternMobile_noPicture' src={dotPatternMobile} alt="" />
            <div className='tertimonial_header'>
                <img src={mark} alt='' />
                <h2>Work<span>cation</span></h2>
            </div>
            <div className='testimonial_mobile_no_picture_content'>
                {children}
            </div>
            <div className="testimonial_mobile_info_no_picture">
                <h3>{`${name ? name : 'Name Surname'}`}</h3>
                <p>{`${company ? company : 'Company'}, ${title ? title : 'Title'}`}</p>
            </div>
        </div>
    )
}