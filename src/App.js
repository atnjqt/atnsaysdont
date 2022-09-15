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

        <h1 class="welcome"> <strong>COCKTAIL HOUR WEDDING MIX FOR ANA & NICK 2022</strong></h1>


      </Card.Header>
    </Card>            

    <Card>
      <Card.Header>
      <h3 class="welcome"> ❤️ 🧡 💛 💚 💙 💜 🤎 🖤 WE LOVE YOU GUYS! ❤️ 🧡 💛 💚 💙 💜 🤎 🖤 </h3>
      </Card.Header>
      <div className="App">
          <iframe src="https://open.spotify.com/embed/playlist/73HZIXT0lpwtmq6b27CTDw?utm_source=generator" width="80%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
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
