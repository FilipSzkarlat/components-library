import quote from './testimonialAssets/quote.svg'

export default function TestimonialsDesktop({picture, children, name, title, company}) {
  return (
    picture ?
      <div className="testimonial">
          <div className="testimonial_picture">
              <img src={picture} alt='' />
          </div>
          <div className="testimonial_content">
              <img src={quote} alt='' className="quote" />
              <div className="testimonial_description">
                {children}
              </div>
              <div className="name">
                  {name ? name : 'Name Surname'}
              </div>
              <div className="job_title">
                  {`${company ? company : 'Company Name'}, ${title ? title : 'Job Title'}`}
              </div>
          </div>
      </div>
    : 
      <div className="testimonial no_picture">
      </div>
  )
}