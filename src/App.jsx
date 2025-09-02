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
      <h2 className='main-title'>Badges</h2>
      <p className='main-text'>You can pick colors between : gray(default), red, yellow, green, blue, indigo, purple and pink.
      There are two shapes available : square(default) and pill.
      </p>
      <div className='badge-container'>
        <Badge>Default</Badge>
        <Badge color='blue'>Blue</Badge>
        <Badge color='green'>Green</Badge>
        <Badge color='red'>Red</Badge>
        <Badge color='yellow'>Yellow</Badge>
        <Badge color='purple'>Purple</Badge>
        <Badge color='pink'>Pink</Badge>
        <Badge color='teal'>Teal</Badge>
      </div>

      <div className='badge-container'>
        <Badge shape='pill' >Default</Badge>
        <Badge shape='pill'  color='blue'>Blue</Badge>
        <Badge shape='pill'  color='green'>Green</Badge>
        <Badge shape='pill'  color='red'>Red</Badge>
        <Badge shape='pill'  color='yellow'>Yellow</Badge>
        <Badge shape='pill'  color='purple'>Purple</Badge>
        <Badge shape='pill'  color='pink'>Pink</Badge>
        <Badge shape='pill'  color='teal'>Teal</Badge>
      </div>

      <h2 className='main-title'>Banners</h2>
      <p className='main-text'>You can pick between four types : success, error, warning and neutral(default). There are also two modes: single line where there is just quit info and multiline whre you can add your text.</p>
      <div className='banner-container'>
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
      </div>

      <h2 className='main-title'>Cards</h2>
      <p className='main-text'>You can add a title to the card by passing a title prop.</p>
      <div className='cards-container'>
        <Card>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card>

        <Card title="Next to do">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card>
      </div>

      <h2 className='main-title'>Testimonials</h2>
      <p className='main-text'>You can use the TestimonialsDesktop component for desktop and the TestimonialMobile component for mobile. You can pass a picture, name, company and title as props. You can also use the components without any props.</p>
      <TestimonialsDesktop picture={image} name={'May Andersons'} company={'Workcation'} title={'CTO'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </TestimonialsDesktop>

      <TestimonialMobile picture={imageMobile} name={'May Andersons'} company={'Workcation'} title={'CTO'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
      </TestimonialMobile>

      <TestimonialsDesktop>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
      </TestimonialsDesktop>

      <TestimonialMobile>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
      </TestimonialMobile>

      <h2 className='main-title'>Tooltips</h2>
      <p className='main-text'>You can pick between four colors : black/white(default), blue, pink and green. You can also choose between two modes : dark(default) and light.</p>

      <div className='main-tooltip-container'>
        <div className="bold">
          <Tooltip>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

          <Tooltip color='blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

          <Tooltip color='pink'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

          <Tooltip color='green'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
        </div>
        <div className="light">
          <Tooltip mode='light'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

          <Tooltip mode='light' color='blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

          <Tooltip mode='light' color='pink'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>

          <Tooltip mode='light' color='green'>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
        </div>
      </div>

      <h2 className='main-title'>Toast Popups</h2>
      <p className='main-text'>You can choose between four types: success (default), warning, error, and information. The popups will appear in the bottom-right corner for 4 seconds. To see them again, you can refresh the page.</p>
      <div className='toast-popup-container'>
        <ToastPopup />

        <ToastPopup type='warning' />

        <ToastPopup type='error' />

        <ToastPopup type='information' />
      </div>
    </>
  )
}
