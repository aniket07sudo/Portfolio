import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Input = (props) => {
    let inputElement = null;
    let inputClass = ["indicator"];

    if (props.clicked) {
        inputClass.push("clicked");
    }
     if (props.touched && props.isValid) {
        inputClass.push("valid");
    }
    
    switch (props.type) {
        case "Message":
            inputElement = (
            <motion.div onClick={props.onClicked} className="p-input" variants={props.variants}>
                <motion.textarea rows={10} cols={10} onChange={props.onChange} className="p-input" placeholder={props.label} />
                <motion.span initial={{width:"0"}} animate={{width:"100%"}} transition={{duration:.7,ease:"easeOut",delay:2}} className={inputClass.join(" ")} ></motion.span>

            </motion.div>
            )
        break;
        default:
            inputElement = (
            <motion.div onClick={props.onClicked} className="p-input" {...props}>
                <input onChange={props.onChange} placeholder={props.label} />
                    {props.clicked && <motion.span initial={{ width: "0" }} animate={{ width: "100%" }} transition={{ duration: .7, ease: "easeOut" }} className={inputClass.join(" ")} ></motion.span>}
            </motion.div>
            )
    }

    return (
        <React.Fragment>
            {inputElement}
        </React.Fragment>
    )
}

export default Input;