import React, { useState , useEffect , useRef} from 'react';
import Image1 from '../Assets/HomeImage/bg-1.jpg';
import Image2 from '../Assets/HomeImage/bg-2.png';
import Slider from "react-slick";
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {PageAnimation,fade,fadeLeft} from '../Animations/PageAnimation';

function Home() {

  const [page,setPage] = useState(0);
  const slider = useRef();
  useEffect(() => {
     
    window.addEventListener('wheel',Scroll);

    return () => {
      window.removeEventListener('wheel',Scroll);
    }

  },[])

  const Scroll = (e) => {
    if (e.deltaY < 0) {
      slider.current.slickPrev();
    } else {
      slider.current.slickNext();
    }
  }

  const pageChange = (e) => {
    console.log(e);
    setPage(e);
  }

  const settings = {
    dots: true,
    fade:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical:true,
    verticalSwiping:true,
    arrows:false,
    infinite:false
  };

  return (
      <SlideContainer variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <div className="homepage-slides" >
      <Slider afterChange={pageChange} {...settings} slidesToScroll={1} swipeToSlide={1} ref={slider} >
      <div className="slide">
        <div className="slide-inner-container">
        <motion.div variants={fadeLeft} className="slide-head">We Revolutioned the way that the Dixons Carphone team communicate</motion.div>
        <motion.div variants={fade} className="p-button">
            See Projects
        </motion.div>
        </div>
      </div>
      <div className="slide">
        <div className="slide-inner-container">
        <div className="slide-head">We Increased fan engagement for afc Bournemouth</div>
        <div className="p-button">
            See Projects
        </div>
        </div>
      </div>
    </Slider>
    </div>
    <div className="hero-background-image">
      <div className={`hero-background-slide ${page === 0 ? 'slide-active' : ''}`} >
      <img src={Image1} />
      </div>
      <div className={`hero-background-slide ${page === 1 ? 'slide-active' : ''}`} >
      <img src={Image2} />
      </div>
    </div>
    </SlideContainer>
  );
}

const SlideContainer = styled(motion.div)`
    height: 100vh;
`;

export default Home;
