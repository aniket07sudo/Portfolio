import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Form from './ContactForm';
import {PageAnimation,ContactForm,formFields} from '../Animations/PageAnimation';

const Contact = (props) => {

    return(
        <AutoWrap variants={PageAnimation} initial="hidden" exit="exit" animate="show">
            <div className="auto-wrap-container">
                <div className="contact-container">
                    <Contactform variants={ContactForm} initial="hidden" animate="show">
                        <motion.div variants={ContactForm} className="contact-head">Let's take your ideas further.</motion.div>
                        <motion.div variants={ContactForm} className="contact-head" >
                            <motion.div initial={{width:0}} animate={{width:'100%'}} transition={{duration:1,ease:"easeOut",delay:2}}  className="contact-overlay"></motion.div>
                        Contact me.
                        </motion.div>
                        <Form />
                    </Contactform>
                    <div className="contact-map">
                    <motion.iframe onMouseOver={props.cursornone} onMouseLeave={props.hoverExit} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28153421.142959796!2d58.94480765729656!3d37.23561396299805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620115085323!5m2!1sen!2sin" width="450" height="550" style={{border:0}}  loading="lazy"></motion.iframe>
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

const Contactform = styled(motion.div)`

`;

export default Contact;