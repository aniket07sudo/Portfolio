import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {PageAnimation} from '../Animations/PageAnimation';
import Work1 from '../Assets/HomeImage/work1.jpg';
import Work2 from '../Assets/HomeImage/work2.jpg';
import Work3 from '../Assets/HomeImage/work3.png';
import Work4 from '../Assets/HomeImage/work4.jpg';
import Work5 from '../Assets/HomeImage/work5.png';

const Work = () => {


    return(
        <AutoWrap variants={PageAnimation} initial="hidden" exit="exit" animate="show">
            <div className="auto-wrap-container">
                <div>
                    <li className="work-card">
                        <img src={Work1} alt="Alt" />
                    </li>
                    <li className="work-card">
                        <img src={Work2} alt="Alt" />
                    </li>
                    <li className="work-card">
                        <img src={Work3} alt="Alt" />
                    </li>     
                    <li className="work-card">
                        <img src={Work4} alt="Alt" />
                    </li>    
                    <li className="work-card">
                        <img src={Work5} alt="Alt" />
                    </li>         
                </div>
            </div>
        </AutoWrap>
    )
}

const AutoWrap = styled(motion.div)`
padding-top: 5rem;
height:100vh;
`;

export default Work;