// PotatoHead.js
import React from 'react';
import Draggable from 'react-draggable';
//import logo from './logo.svg';
import { Card } from 'react-bootstrap';
import { Text } from "react-native";
import { motion } from "framer-motion";

class PotatoHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input_val: ''};
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }   
    handleChange(event) {
    this.setState({input_val: event.target.value});
    }   
    handleSubmit(event) {
    alert('😂😂😂😂😂 ' + this.state.input_val);
    event.preventDefault();
    }  
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
            <div class="container" style={{ backgroundImage: "url(https://morphic-images.s3.us-east-2.amazonaws.com/30/Athleticon_Gradient_1800_2_95fdea7dc1.gif)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}>

                <div class='App'>

                <Card>
                    <Card.Header>
                    <h1 class="welcome"> <strong><em>Mr Says Dontato Head</em></strong></h1>
                    <h2 class="welcome"> 🎉🥔🎂🍟🎂🥔🎉🥔🎂🍟🎂🥔🎉   </h2>
                    <h3 class="welcome"> Arrange your mr potato head and send me a screenshot! </h3>



                    </Card.Header>
                </Card>

                <Card>
                    <Card.Footer>

                    </Card.Footer>
                </Card>
                <Card>
                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/kXbr8Tb.png" alt="potato head body" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/dvuvpAb.png" alt='etienne head' className="handle"/>
                    </div>
                    </div>
                </Draggable>
                            
                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="parts">
                        <img draggable="false" src="https://i.imgur.com/GONNbHf.png" alt="potato head hat" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/optSzq4.png" alt="potato head left arm" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/qJDxc4o.png" alt="potato head right arm" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/tIZGoeR.png" alt="potato head left ear"className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/bKlbeXU.png" alt="potato head right ear"className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/eUPbX3H.png" alt="potato head shoes" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/voJPsR5.png" alt="potato head nose and mouth" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/dt2gqit.png" alt="potato head eyes" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/2POeyJZ.png" alt="potato head eyebrows" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="etienne">
                        <img draggable="false" src="https://i1.sndcdn.com/avatars-pcpt6w9sE5FUfvmE-833Ruw-t500x500.jpg" alt="etienne's soundcloud profile pic" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/x84lCwz.png" alt="etienne eyebrows" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/OXGIjCP.png" alt="etienne eyes" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/CYHKhP3.png" alt="etienne nose and mouth" className="handle"/>
                    </div>
                    </div>
                </Draggable>
                
                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/IK80v3u.png" alt="etienne ear" width='42px' className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="body">
                        <img draggable="false" src="https://i.imgur.com/AFL5Ms4.gif" alt="gif of text on fire, says dont" className="handle"/>
                    </div>
                    </div>
                </Draggable>

                <Draggable {...dragHandlers}>
                    <div class="container">
                    <div class="textbox">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        <input type="text" autocomplete="off" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>             
                    </div>
                    </div>
                </Draggable>
                
                </Card>

                <Card>
                    <Card.Footer>
                    <Text>
                    {'\n'}
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/terror/dracula/dracula.gif" draggable='false' transform="scaleX(-1)" hspace="0" alt="Dracula"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/terror/varios/39.gif" draggable='false' hspace="0" alt="trident"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/terror/fantasmas/fantasma-5.gif" draggable='false'alt="fantasma"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/terror/varios/39.gif" draggable='false' hspace="0" alt="trident"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/insectos/abejas/images/disfrazado-de-abeja.gif" draggable='false' hspace="0"alt="Criatura"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/comics/spiderman/images/001.gif" draggable='false' hspace="0" alt="Spider-man"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/arquitectura/esculturas/images/gif-escultura-16.gif" draggable='false' hspace="0" alt="Sculpture"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/alimentos/donut/gif-donut.gif" draggable='false' alt="donut"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/animales/unicornios/images/unicornio-09.gif" draggable='false' alt="unicorn"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/cultura/horoscopos/acuario/acuario5.gif" draggable='false' alt="aquarius"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/espacio/alien/images/alien-61.gif" draggable='false' alt="alien"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/musica/dj/dj-disco01.gif" draggable='false' alt="dj"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/herramientas/varias/iman.gif" draggable='false' alt="magnet"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/profesiones/astronautas/astronauta.gif" draggable='false' alt="astronaut"></img>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                            <img draggable="false" src="https://shkspr.mobi/blog/wp-content/uploads/2015/02/loop2.gif" alt="spinning rainbow" width="275px" className="handle"/>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                            <img draggable="false" src="https://i.gifer.com/K9m.webp" alt="spinning person" width="250px"/>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                            <img draggable="false" src="https://i.gifer.com/DFC.webp" alt="spinning hands" width="250px"/>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <img src="https://www.gifss.com/arquitectura/antenas/images/satelite-6.gif" draggable='false' alt="sattelite"></img>
                    </Draggable>
                    {'\n'}{'\n'}
                    </Text>
                    </Card.Footer>
                </Card>

                </div>
            </div>
        );
    }
}

  

export default PotatoHead;
