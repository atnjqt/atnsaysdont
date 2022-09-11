//import logo from './logo.svg';
import { Card } from 'react-bootstrap';
import { Text } from "react-native";

import Footer from './footer'

import './App.css';

function App() {
  return (
  <div class="container" style={{ backgroundImage: "url(https://morphic-images.s3.us-east-2.amazonaws.com/30/Athleticon_Gradient_1800_2_95fdea7dc1.gif)",backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',}}> 
        
    <Card>
      <Card.Header>

        <h1 class="welcome"> <strong>ATN SAYS DONT</strong></h1>


      </Card.Header>
    </Card>            

    <Card>
      <Card.Header>
      <h3 class="welcome">some stuff on soundcloud</h3>
      </Card.Header>
      <div className="App">
          <iframe width="50%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1218675643&color=%23ff1f9a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </div>
      <Card.Footer>
        <Text>
        {'\n'}{'\n'}{'\n'}
        </Text>
        <Footer>
        </Footer>
      </Card.Footer>
    </Card>

  </div>
  );
}

export default App;
