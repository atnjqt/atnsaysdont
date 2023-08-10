// Promo.js (for class-based component)
import React from 'react';
import { Card } from 'react-bootstrap';
import Popup from 'reactjs-popup';

class Promo extends React.Component {
  render() {
    return (
      
      <div class="container" style={{ backgroundImage: "url(https://morphic-images.s3.us-east-2.amazonaws.com/30/Athleticon_Gradient_1800_2_95fdea7dc1.gif)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',}}>
      <div class='App'>

      <h1 class="welcome">Vinyl Turntable DJ Sets:</h1>
      <h2 class="welcome">Chronological Order (2018-2023):</h2>
      <h3 class="welcome">*✞✞ <em>all events as DJ duo Ibn & Etienne</em> ✞✞*</h3>
      <img class='wrap' src="https://i.imgur.com/DoEitAL.png" draggable='false' height="30%" width="30%" transform="scaleX(-1)" hspace="0"></img>
      <ul class="promo_page"> 
        <li><strong>2018:</strong>
          <ul>
            <li>birthday parties, house shows, etc...</li>
          </ul>
        </li>
        <li><strong>2019:</strong> 
          <ul>
            <li>The Cannery @ Dock Street Brewing (<a href="https://www.instagram.com/dockstreetcannery/?hl=en" target="_blank">see here</a>)</li>
            <li>Goorin Hats (Bourbon Promo)</li>
            <li>Cantina Dos Segundos (Beer'mosa Promo / Sunday Groove Jawn)</li>
            <li>William Way Community Center (Drexel Graduation Art Fair: <Popup 
              trigger={<a href="javascript:void(0)" className="button">here</a>} 
              modal>
                <img src="https://i1.sndcdn.com/avatars-ydCSjyQyScasUo2f-DYaXEg-t500x500.jpg" draggable='false' height="100%" width="100%" transform="scaleX(-1)" hspace="0"></img>
            </Popup>)
            </li>
          </ul>
        </li>
        <li><strong>2020:</strong> 
          <ul>
            <li>Mushulou (Wedding gig)</li>
            <li>Distant Disco @ Bicentennial Park</li>
          </ul>
        </li>
        <li><strong>2021:</strong>
          <ul>
            <li>Roggio Beauty (Fortuna Italian Promo)</li>
            <li>Jazz Jam Residency (World Cafe Live Lounge)</li>
          </ul>
        </li>
        <li><strong>2022:</strong>
          <ul>
            <li>Jazz Jam Residency (World Cafe Live Lounge)</li>
            <li>House Guest Residency (Ps&Qs South Street)</li>
          </ul>
        </li>
        <li><strong>2023:</strong>
          <ul>
            <li>House Guest Residency (Ps&Qs South Street)</li>
            <li>tbd...</li>
          </ul>
        </li>
      </ul>

      <h3 class="welcome">*✞✞ <em> hardware & equipment:</em> ✞✞*</h3>
      <ul class="promo_page">
        <li>Technics SL-1200MK2s</li>
        <li>Pioneer DJM-250MK2 DJ Mixer</li>
        <li>MacBook Pro (2022 M1)</li>
        <li>Studio Monitor Speakers 5"</li>
        <li>Akai MPC Studio Black</li>
        <li>*SOON TO PURCHASE???:</li>
          <ul>
            <li>Rane One or a Pionner DDJ-REV7?</li>
          </ul>
      </ul>
      </div>
    </div>
    );
  }
}

export default Promo;