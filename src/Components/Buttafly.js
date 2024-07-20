import React from 'react';
import './Saapato.css';

class Saapato extends React.Component {
    render() {
        //const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

        return (
            <div class='App'>
                <h1>DEMO PAGE ('link out to menus and stuff')</h1> 
                <div class="container" style={{ backgroundImage: "url(https://img.saysdont.com/images/butterfly_promo.gif)",
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',}}>
                    <br />
                    <br />
                    <br />
                    <br />  
                    <br />
                    <br />
                    <br />                   
                    <p><span class="before-colon">See more here:</span> <a href="https://linktr.ee/blackbuttafly" target="_blank" class="menu_links">linktr.ee/blackbuttafly</a></p>
                    <p><span class="before-colon">ig:</span> <a href="https://www.instagram.com/blackbuttaflyofficial" target="_blank" class="menu_links">@blackbuttaflyofficial</a></p>
                    <p><span class="before-colon">ig (NU SCHOOL):</span> <a href="https://www.instagram.com/thenuschoolcollective" target="_blank" class="menu_links">@thenuschoolcollective</a></p>
                    <p><span class="before-colon">-----------------------</span></p>
                    <p><span class="before-colon"> 🦋 🦋 🦋 :</span></p>
                    <p><span class="before-colon">SPOTIFY:</span> <a href="https://open.spotify.com/artist/24ZDIpf0bZvRzqOUSIMH5l" target="_blank" class="menu_links_soundcloud">SPOTIFY</a></p>
                    <p><span class="before-colon">Promo (NEW):</span> <a href="https://open.spotify.com/artist/24ZDIpf0bZvRzqOUSIMH5l" target="_blank" class="menu_links_soundcloud">Promo (NEW)</a></p>

                    <br />
                    <br />
                    <br />                   
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />                    
                    <br />
                    <br />
                    <br />
                </div> 
            </div>         
        );
    }
}

export default Saapato;