//const {ReactDraggable: Draggable, React, ReactDOM} = window;
import React from 'react';
import Draggable from 'react-draggable';
import Footer from './footer'
//import logo from './logo.svg';
import { Card } from 'react-bootstrap';
import { Text } from "react-native";
import { motion } from "framer-motion";

import './App.css';

class App extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  };

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };
  onDrop = (e) => {
    this.setState({activeDrags: --this.state.activeDrags});
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove('hovered');
    }
  };
  onDropAreaMouseEnter = (e) => {
    if (this.state.activeDrags) {
      e.target.classList.add('hovered');
    }
  }
  onDropAreaMouseLeave = (e) => {
    e.target.classList.remove('hovered');
  }

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return (

      <div class="container" style={{ backgroundImage: "url(https://morphic-images.s3.us-east-2.amazonaws.com/30/Athleticon_Gradient_1800_2_95fdea7dc1.gif)",backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',}}>

          <Card>
            <Card.Header>
              <h1 class="welcome"> <strong><em>ATN_SAYS_DONT</em> (PROMO PAGE)</strong></h1>
              <h2 class="welcome"> ✟👨‍🍳🎨🎧✟🎨🎧👨‍🍳✟🎧👨‍🍳🎨✟   </h2>
            </Card.Header>
          </Card>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="body">
                <img draggable="false" src="https://i.imgur.com/kXbr8Tb.png" className="handle"/>
              </div>
            </div>
          </Draggable>
          
          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="parts">
                <img draggable="false" src="https://i.imgur.com/GONNbHf.png" className="handle"/>
              </div>
            </div>
          </Draggable>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="body">
                <img draggable="false" src="https://i.imgur.com/optSzq4.png" className="handle"/>
              </div>
            </div>
          </Draggable>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="body">
                <img draggable="false" src="https://i.imgur.com/qJDxc4o.png" className="handle"/>
              </div>
            </div>
          </Draggable>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="body">
                <img draggable="false" src="https://i.imgur.com/tIZGoeR.png" className="handle"/>
              </div>
            </div>
          </Draggable>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="body">
                <img draggable="false" src="https://i.imgur.com/bKlbeXU.png" className="handle"/>
              </div>
            </div>
          </Draggable>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="body">
                <img draggable="false" src="https://i.imgur.com/eUPbX3H.png" className="handle"/>
              </div>
            </div>
          </Draggable>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="body">
                <img draggable="false" src="https://i.imgur.com/voJPsR5.png" className="handle"/>
              </div>
            </div>
          </Draggable>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="body">
                <img draggable="false" src="https://i.imgur.com/dt2gqit.png" className="handle"/>
              </div>
            </div>
          </Draggable>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="body">
                <img draggable="false" src="https://i.imgur.com/2POeyJZ.png" className="handle"/>
              </div>
            </div>
          </Draggable>

          <Draggable {...dragHandlers}>
            <div class="container">
              <div class="etienne">
                <img draggable="false" src="https://i1.sndcdn.com/avatars-pcpt6w9sE5FUfvmE-833Ruw-t500x500.jpg" className="handle"/>
              </div>
            </div>
          </Draggable>


          <Card>
            <div className="App">
              <iframe width="40%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1218675643&color=%23578af8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              <div>
                  <a href="https://soundcloud.com/etienne-jacquot" title="ATN SAYS DONT" target="_blank" rel="noreferrer">ATN SAYS DONT</a></div>      
              </div>
            <Card.Footer>
              <motion.div
              className="speechBubble"
              aria-label="speechBubble"
              role="img"
              animate={{
                scale:  [0, 7.8]
              }}
              transition={{
                duration: 10,
                ease: "circInOut",
                times:  [0.0,0.3],
                loop: Infinity,
                repeatDelay: 0
              }}>
              <span role="img" aria-label="speechBubble">
              🌊 🌊 🌊
              </span>
              </motion.div>
              <Text>
              {'\n'}{'\n'}{'\n'}{'\n'}
              </Text>
              <Footer>
              </Footer>
              <draggableElements></draggableElements>
            </Card.Footer>
          </Card>

      </div>
    );
  }
}

export default App;