import Carousel from 'react-bootstrap/Carousel';
function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img width="100%"  style={{ maxHeight:"700px", height:"100%", width:"100%"}}
      src='https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' text="Second slide" />
        <Carousel.Caption style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } }>
        <h1 className="display-1 fw-bold">Black Oak Realty</h1>
          <h1 className='fst-italic'>Sustainable Living</h1>
          <p className='fst-italic'>Advocating for and embodying sustainable practices to create a greener, healthier, and more environmentally conscious future.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%"  style={{ maxHeight:"700px", height:"100%", width:"100%"}}
      src='https://images.pexels.com/photos/2893177/pexels-photo-2893177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' text="Second slide" />
       
        <Carousel.Caption style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 className="display-1 fw-bold">Black Oak Realty</h1>
          <h1 className='fst-italic'>Innovative Solutions</h1>
          <p className='fst-italic'>
          Pioneering groundbreaking solutions that redefine industry standards and drive innovation.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"  style={{ maxHeight:"700px", height:"100%", width:"100%"}}
        src='https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' text="Second slide" />
        <Carousel.Caption style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 className="display-1 fw-bold">Black Oak Realty</h1>
          <h1 className='fst-italic'>Customer-Centric Approach</h1>
          <p className='fst-italic'>Committed to putting our customers first, providing unparalleled service, and building lasting relationships.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFade;