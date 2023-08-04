import React from 'react';

class About extends React.Component {
    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

        return (
                <div class="container" style={{ backgroundImage: "url(https://morphic-images.s3.us-east-2.amazonaws.com/30/Athleticon_Gradient_1800_2_95fdea7dc1.gif)",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',}}>

                    <div class='App'>
                        <h1>About page</h1>            
                        <p>contact: 215-xxx-xxxx</p>
                    </div>

                </div>  

                
        );
    }
}

export default About;