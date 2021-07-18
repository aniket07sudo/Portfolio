import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {PageAnimation} from '../Animations/PageAnimation';
import {Link} from 'react-router-dom';

const Skills = (props) => {

    return(
        <AutoWrap variants={PageAnimation} initial="hidden" exit="exit" animate="show">
            <div className="auto-wrap-container">
                {/* <div className="skill-bg">
                    <Resume />
                </div> */}
                <div className="skill-container">
                    <div className="skill-txt">
                    <motion.div initial={{scale:.7}} animate={{scale:1}} transition={{duration:1.5,ease:"easeInOut"}} className="myself-head">
                        Skills & Experience
                    </motion.div>
                    <div className="skill-body">
                    <p>Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.</p>

<p>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>

<p>I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .</p>

<p>Visit my <a onMouseOver={props.hoverenter} onMouseLeave={props.hoverExit} href="https://www.linkedin.com/in/aniket-kumar-sharma-0071b1158/" target="_blank" className="intext-link">LinkedIn</a> profile for more details or just <Link to="/contact" className="intext-link">contact</Link> me.</p>
                    </div>
                    </div>
                    <div className="graph-container">
                        <div className="chart">
                            <span>Front-end</span>
                            <footer>
                                <Level animate={{width:"90%"}} transition={{duration:1.5,ease:"easeOut",delay:0}}  color="#D26CD5" ></Level>
                            </footer>
                        </div>
                        <div className="chart">
                            <span>Back-end</span>
                            <footer>
                                <Level animate={{width:"50%"}} transition={{duration:1.5,ease:"easeOut",delay:.5}} color="#FF2253"></Level>
                            </footer>
                        </div>
                        <div className="chart">
                            <span>React</span>
                            <footer>
                                <Level animate={{width:"65%"}} transition={{duration:1.5,ease:"easeOut",delay:1}} color="#ffe268" ></Level>
                            </footer>
                        </div>
                        <div className="position-container">
                            <div className="position-card">
                                <h2>Full stack developer</h2>
                                <div className="position-body">
                                    <h4>VB EASY Pvt Ltd, Delhi, India</h4>
                                    <h5>2021-Present</h5>
                                   
                                    <p>Creative brand, website design and development studio that can bring your online business dreams to life</p>
                                    <motion.span initial={{height:"0"}} animate={{height:"100%"}} transition={{duration:.7,ease:"easeOut",delay:2}} className="endLine" ></motion.span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AutoWrap>
    )
}

const AutoWrap = styled(motion.div)`
padding-top: 5rem;
height:100vh;
`;

const Level = styled(motion.div)`
    position: absolute;
    height: 2.5px;
    width:${props => props.width}%;
    background-color: ${props => props.color};

`;


export default Skills;