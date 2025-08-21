import quote from './testimonialAssets/quote.svg'

export default function TestimonialsMobile({picture, children, name, title, company}) {
    return (
        <div className="testimonial_mobile_container">
            <img src={picture} alt="Testimonial" />
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
    )
}