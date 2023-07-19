import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from '../Card/Card';

function Projects({ cards }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1279, min: 600 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} className='arrow__right' />;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} className='arrow__left' />;
  };

  return (
    <section className='projects' id='projects'>
      <h2 className='projects__title'>Проекты</h2>
      <Carousel
        responsive={responsive}
        itemClass='projects__card'
        containerClass='projects__carousel'
        sliderClass='test'
        dotListClass='test'
        showDots={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </Carousel>
      ;
    </section>
  );
}

export default Projects;
