import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {PageAnimation} from '../Animations/PageAnimation';

const About = () => {

    return (
      <AutoWrap variants={PageAnimation} initial="hidden" animate="show" exit="exit" > 
        <div className="auto-wrap-container">
            <div className="myself-head">Me, Myself & I</div>
            <p className="myself-txt">My name is Bernard Sydney. I am a Web Developer, and I'm very passionate and dedicated to my work.</p>
            <p className="myself-txt">With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
            {/* <span className={`myself-head ${animate}`} onMouseEnter={enterAnim}>M</span> */}
            <p className="myself-txt">With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
        </div>
      </AutoWrap>
    )
}

const AutoWrap = styled(motion.div)`
padding-top: 5rem;
height:100vh;
`;
const Myself = styled(motion.div)`
padding:2rem;
`;


export default About;