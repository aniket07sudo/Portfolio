import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {formFields} from '../Animations/PageAnimation';


class Fields extends Component {

    render() {

        return(
            <>
            <motion.div className="form-container" variants={formFields} initial="hidden" animate="show">
                <motion.div className="first-input" variants={formFields}>
                <motion.div className="p-input">
                    <input placeholder="Name" />
                    <span className="indicator"></span>
                </motion.div>
                <motion.div className="p-input">
                    <input placeholder="Email" />
                    <span className="indicator"></span>
                </motion.div>
                </motion.div>
                <motion.div className="p-input" variants={formFields}>
                    <input placeholder="Subject" />
                    <span className="indicator"></span>
                </motion.div>
                <motion.div className="p-input w-100" variants={formFields}>
                    <input placeholder="Message" />
                    <span className="indicator"></span>
                </motion.div>
               
            </motion.div>
             <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} className="p-button">
                Send Message
            </motion.div>
         </>
        )
    }
}

export default Fields;