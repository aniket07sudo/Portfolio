import React, { useState , useEffect , useRef} from 'react';
import {withRouter , Route , Switch} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Work from './Components/Work';
import "./styles/main.scss";
import {AnimatePresence} from 'framer-motion';


function App(props) {

  const [cursorXY,setCursorXY] = useState({x:-100,y:-100});
  const [TcursorXY,setTCursorXY] = useState({x:-100,y:-100});
  const [cursorScale,setCursorScale] = useState(1);
  const [color,setColor] = useState(false);
  const [mainCursor,setMainCursor] = useState(false);

  const HoverCursorEnter = () => {
    setCursorScale(1.6);
    setColor(true);
  }

  const HoverCursorExit = () => {
    setCursorScale(1);
    setColor(false);
    setMainCursor(false);

  }

  const CursorNone = () => {
    setCursorScale(0);
    setColor(false);
    setMainCursor(true);
  }

  const moveCursor = (e) => {
    const x = e.clientX - 5;
    const y = e.clientY - 5;
    setCursorXY({x,y});
    setTimeout(() => {
      setTCursorXY({x,y});
    }, 110);
  }

  useEffect(() => {

    window.addEventListener('mousemove',moveCursor);

    return () => {
      window.removeEventListener('mousemove',moveCursor)
    }
  })

  return (
    <div className="App">
      <div className="cursors" >
        <div className="cursor" style={{transform:`translate3d(${cursorXY.x}px,${cursorXY.y}px,0)`,display:color ? 'none' : '',visibility:mainCursor ? 'hidden':'visible'}} ></div>
        <div className="cursor tcursor" style={{transform:`translate3d(${TcursorXY.x - 6}px,${TcursorXY.y - 6}px,0) scale(${cursorScale})`,backgroundColor:color ? '#08FDD8' : ''}} ></div>
      </div>
      <div className="main-container">
      <Navbar />
      <div className="main-bg">
      <AnimatePresence exitBeforeEnter>
      <Switch location={props.location} key={props.location.pathname}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/skills" exact render={(props) => <Skills hoverenter={HoverCursorEnter} hoverExit={HoverCursorExit}  {...props} />} />
        <Route path="/contact" exact render={(props) => <Contact cursornone={CursorNone} hoverExit={HoverCursorExit} {...props} />} />
        <Route path="/work" component={Work} exact />
      </Switch>
      </AnimatePresence>
      </div>
      </div>
    </div>
  );
}

export default withRouter(App);
