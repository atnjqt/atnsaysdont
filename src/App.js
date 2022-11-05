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
                scale:  [0, 8.8]
              }}
              transition={{
                duration: 10,
                ease: "circInOut",
                times:  [0.0,0.3],
                loop: Infinity,
                repeatDelay: 0.2
              }}>
              <span role="img" aria-label="speechBubble">
              🌊 🌊 🌊
              </span>
              </motion.div>
              <Text>
              {'\n'}
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/terror/dracula/dracula.gif" draggable='false' transform="scaleX(-1)" hspace="0" width="10.5%" alt="Dracula"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                  <img src="https://www.gifss.com/terror/varios/39.gif" draggable='false' hspace="0" width="3%" alt="trident"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/terror/fantasmas/fantasma-5.gif" draggable='false' width="13%" alt="fantasma"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                  <img src="https://www.gifss.com/terror/varios/39.gif" draggable='false' hspace="0" width="3%" alt="trident"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                  <img src="https://www.gifss.com/insectos/abejas/images/disfrazado-de-abeja.gif" draggable='false' hspace="0" width="12%" alt="Criatura"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                  <img src="https://www.gifss.com/comics/spiderman/images/001.gif" draggable='false' hspace="0" width="12%" alt="Spider-man"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                  <img src="https://www.gifss.com/arquitectura/esculturas/images/gif-escultura-16.gif" draggable='false' hspace="0" width="12%" alt="Sculpture"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/alimentos/donut/gif-donut.gif" draggable='false' alt="donut"  width="10%" alt="donut"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/animales/unicornios/images/unicornio-09.gif" draggable='false' alt="unicorn" width="19%"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/arquitectura/antenas/images/satelite-6.gif" draggable='false' alt="sattelite" width="19%"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/cultura/horoscopos/acuario/acuario5.gif" draggable='false' alt="aquarius" width="6%"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/espacio/alien/images/alien-61.gif" draggable='false' alt="alien" width="15%"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/musica/dj/dj-disco01.gif" draggable='false' alt="dj" width="12%"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/herramientas/varias/iman.gif" draggable='false' alt="magnet" width="8%"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/profesiones/astronautas/astronauta.gif" draggable='false' alt="astronaut" width="8%"></img>
              </Draggable>
              <Draggable {...dragHandlers}>
                <img src="https://www.gifss.com/videojuegos/kirby/images/kirby-01.gif" draggable='false' alt="kirby" width="8%"></img>
              </Draggable>
              {'\n'}{'\n'}
              </Text>
              <draggableElements></draggableElements>
            </Card.Footer>
          </Card>

          <Footer>
          </Footer>

      </div>
    );
  }
}

export default App;