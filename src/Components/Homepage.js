import React from 'react';
import { Card } from 'react-bootstrap';


class Homepage extends React.Component {
    render() {
        return (
                <div class="container" style={{ backgroundImage: "url(https://morphic-images.s3.us-east-2.amazonaws.com/30/Athleticon_Gradient_1800_2_95fdea7dc1.gif)",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',}}>
                    
                    <div class='App'>
                    <Card>
                        <div className="App">
                        <img src="https://i.imgur.com/IqSzeEw.png" draggable='false' height="100%" transform="scaleX(-1)" hspace="0"></img>
                        </div>
                    </Card>
                </div>  
            </div>
        );
    }
}

export default Homepage;