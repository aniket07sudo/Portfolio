export const PageAnimation = {
    hidden:{
        opacity:0,
        y:100
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:.7,
            ease:"easeOut"
        }
    },
    exit:{
        opacity:0,
        y:100,
        transition:{
            duration:.4,
            ease:"easeOut"
        }
    }
}
export const fade = {
    hidden:{
        opacity:0,
       
    },
    show:{
        opacity:1,
        
        transition:{
            duration:1,
            ease:"easeIn"
        }
    }
}

export const fadeLeft = {
    hidden:{
        opacity:0,
        x:100
    },
    show:{
        opacity:1,
        x:0,
        transition:{
            duration:1
        }
    }
}

export const ContactForm = {
    hidden:{
        y:50,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:.8,
            ease:"easeInOut",
            when:"beforeChildren",
            staggerChildren:.3
        }
    }
}

export const formFields = {
    hidden:{
        y:100,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:.6,
            when:"beforeChildren",
            staggerChildren:.2
        }
    }
}