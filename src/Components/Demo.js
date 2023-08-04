import React from 'react';
import Draggable from 'react-draggable';


class Demo extends React.Component {
    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

        return (
                <div class="container" style={{ backgroundImage: "url(https://morphic-images.s3.us-east-2.amazonaws.com/30/Athleticon_Gradient_1800_2_95fdea7dc1.gif)",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',}}>

                    <div class='App'>
                        <h1>Turntablism</h1>            
                        <p>SoundCloud Demo tracks:</p>
                        <iframe width="50%" height="5%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1233626212&color=%23578af8&inverse=false&auto_play=false&show_user=true"></iframe>
                        <div>
                            <a href="https://soundcloud.com/etienne-jacquot" title="ATN SAYS DONT" target="_blank" rel="noreferrer">ATN SAYS DONT</a>
                        </div>  
                    </div>

                    <Draggable {...dragHandlers}>
                        <div class="container">
                        <div class="textbox">
                            <label>
                                Choose a DJ:
                                <input list="disc_jockeys" autocomplete="off" name="myDJ" />  
                            </label>   
                            <datalist id="disc_jockeys">
                                <option value="DJ SAYSDONT" />
                                <option value="DJ SWIB" />
                                <option value="foobar" />   
                            </datalist>
                            </div>
                        </div>
                    </Draggable>   
                    
                </div>  

                
        );
    }
}

export default Demo;