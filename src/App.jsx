import Badge from './components/Badge.jsx';
import Banner from './components/Banner.jsx';
import Card from './components/Card.jsx';
import TestimonialsDesktop from './components/TestimonialsDesktop.jsx';
import image from './components/TestimonialAssets/Image.png'
import imageMobile from './components/TestimonialAssets/ImageMobile.png'
import TestimonialMobile from './components/TestimonialsMobile.jsx';
import Tooltip from './components/Tooltip.jsx';
import ToastPopup from './components/ToastPopup.jsx';

export default function App() {

  return (
    <>
      <Banner type="success"></Banner>
      <Banner type="success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
      </Banner>

      <Banner type="error"></Banner>
      <Banner type="error">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
      </Banner>

      <Banner type="warning"></Banner>
      <Banner type="warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
      </Banner>

      <Banner type="neutral"></Banner>
      <Banner type="neutral">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
      </Banner>

      <Card>
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
      </Card>

      <Card title="Next to do">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
      </Card>

      <TestimonialsDesktop picture={image} name={'May Andersons'} company={'Workcation'} title={'CTO'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </TestimonialsDesktop>

      <TestimonialsDesktop name={'May Andersons'} company={'Workcation'} title={'CTO'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
      </TestimonialsDesktop>

      <TestimonialMobile picture={imageMobile} name={'May Andersons'} company={'Workcation'} title={'CTO'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
      </TestimonialMobile>

        <TestimonialMobile picture={imageMobile}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
      </TestimonialMobile>

      <TestimonialMobile name={'May Andersons'} company={'Workcation'} title={'CTO'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
      </TestimonialMobile>

        <TestimonialMobile>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
      </TestimonialMobile>

      <Tooltip>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

      <Tooltip color='blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

      <Tooltip color='pink'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

      <Tooltip color='green'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

      <Tooltip mode='light'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

      <Tooltip mode='light' color='blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

      <Tooltip mode='light' color='pink'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

      <Tooltip mode='light' color='green'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>



      <div className='toast-popup-container'>
        <ToastPopup />

        <ToastPopup type='warning' />

        <ToastPopup type='error' />

        <ToastPopup type='information' />
      </div>
    </>
  )
}
