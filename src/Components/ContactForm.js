import React from 'react';
import { Component } from 'react';
import {motion} from 'framer-motion';
import { formFields } from '../Animations/PageAnimation';
import Input from './Input';


class Fields extends Component {

    state = {
        controls: {
            email: {
                label:"Email",
                elementType: 'input',
                errorMessage:"Enter valid email address",
                value: '',
                validation: {
                    required: true,
                    email:true
                },
                valid: false,
                touched:false
            },
            name: {
                label:"Name",
                elementType: 'input',
                secureTextEntry:true,
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                clicked:false
            },
            subject: {
                label:"Subject",
                elementType: 'input',
                errorMessage:"Invalid Password",
                secureTextEntry:true,
                value: '',
                validation: {
                    required: true,
                    minlength:3
                },
                valid: false,
                touched:false
            },
            message: {
                label:"Message",
                elementType: 'input',
                errorMessage:"Invalid Password",
                secureTextEntry:true,
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched:false
            },
        },
        formValid:false
    }

    checkValidity(value,rules) {
        let isValid = true;
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minlength) {
            isValid = value.length >= rules.minlength;
            console.log(value.length);
        }
        if (rules.cnf) {
            isValid = value === this.state.controls.password.value && isValid;
        }
        if (rules.email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = re.test(String(value).toLowerCase()) && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (value,identifier) => {
        const updatedControls = {
            ...this.state.controls
        }
        const updatedField = {
            ...updatedControls[identifier]
        }
        updatedField.value = value;
        updatedField.touched = true;
        updatedField.valid = this.checkValidity(updatedField.value, updatedField.validation);
        updatedControls[identifier] = updatedField;
        let isValid = true;
        for (let key in this.state.controls) {
            isValid = isValid && updatedControls[key].valid;
        }
        this.setState({ controls: updatedControls,formValid:isValid });
    }

    handleClicked = (identifier) => {
        console.log(identifier);
        const updatedControls = {
            ...this.state.controls
        }
        for (let key in this.state.controls) {
            updatedControls[key].clicked = false;
        }
        const updatedField = {
            ...updatedControls[identifier]
        }

        console.log(updatedField);
        updatedField.clicked = true;
        
        updatedControls[identifier] = updatedField;

        this.setState({ controls: updatedControls });

    }

    render() {

        return(
            <>
            <motion.div className="form-container" variants={formFields} initial="hidden" animate="show">
                <motion.div className="first-input" variants={formFields}>
                <Input clicked={this.state.controls.name.clicked} touched={this.state.controls.name.touched} isValid={this.state.controls.name.valid} value={this.state.controls.name.value} onChange={(e) => this.inputChangedHandler(e.target.value,"name")} label={this.state.controls.name.label} onClicked={() => this.handleClicked("name")} />
                <Input clicked={this.state.controls.email.clicked} touched={this.state.controls.email.touched} isValid={this.state.controls.email.valid} value={this.state.controls.email.value} onChange={(e) => this.inputChangedHandler(e.target.value,"email")} label={this.state.controls.email.label} onClicked={() => this.handleClicked("email")} />
                        
                    </motion.div>
                <Input variants={formFields} clicked={this.state.controls.subject.clicked} touched={this.state.controls.subject.touched} isValid={this.state.controls.subject.valid} value={this.state.controls.subject.value} onChange={(e) => this.inputChangedHandler(e.target.value,"subject")} label={this.state.controls.subject.label} onClicked={() => this.handleClicked("subject")} />
                
                <Input type="Message" variants={formFields} clicked={this.state.controls.message.clicked} touched={this.state.controls.message.touched} isValid={this.state.controls.message.valid} value={this.state.controls.message.value} onChange={(e) => this.inputChangedHandler(e.target.value,"message")} label={this.state.controls.message.label} onClicked={() => this.handleClicked("message")} />
                    
            </motion.div>
             <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} className="p-button">
                Send Message
            </motion.div>
         </>
        )
    }
}

export default Fields;