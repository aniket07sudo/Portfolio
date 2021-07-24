import React, { useState , useEffect , useRef} from 'react';
import {withRouter , Route , Switch} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Work from './Components/Work';
import "./styles/main.scss";
import { AnimatePresence } from 'framer-motion';
import Cursor from 'react-animated-cursor';


function App(props) {




  return (
    <div className="App">
      {/* <div className="cursors" >
        <div className="cursor" style={{transform:`translate3d(${cursorXY.x}px,${cursorXY.y}px,0)`,display:color ? 'none' : '',visibility:mainCursor ? 'hidden':'visible'}} ></div>
        <div className="cursor tcursor" style={{transform:`translate3d(${TcursorXY.x - 6}px,${TcursorXY.y - 6}px,0) scale(${cursorScale})`,backgroundColor:color ? '#08FDD8' : ''}} ></div>
      </div> */}
      <Cursor
      innerSize={8}
      outerSize={18}
      color="255,255,255"
      outerAlpha={0.3}
      innerScale={1}
      outerScale={2}
    />
      <div className="main-container">
      <Navbar />
      <div className="main-bg">
      <AnimatePresence exitBeforeEnter>
      <Switch location={props.location} key={props.location.pathname}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/skills" exact component={Skills} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/work" component={Work} exact />
      </Switch>
      </AnimatePresence>
      </div>
      </div>
    </div>
  );
}

export default withRouter(App);
