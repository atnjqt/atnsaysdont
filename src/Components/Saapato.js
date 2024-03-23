import React from 'react';
import './Saapato.css';

class Saapato extends React.Component {
    render() {
        //const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

        return (
            <div class='App'>
                <h1>DEMO PAGE ('link out to menus and stuff')</h1> 
                <div class="container" style={{ backgroundImage: "url(https://img.saysdont.com/images/frog_lilypad.gif)",
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
                    <p><span class="before-colon">See more here:</span> <a href="https://linktr.ee/saapato" target="_blank" class="menu_links">linktr.ee/saapato</a></p>
                    <p><span class="before-colon">ig:</span> <a href="https://www.instagram.com/saapato" target="_blank" class="menu_links">@saapto</a></p>
                    <p><span class="before-colon">random:</span> <a href="https://img.saysdont.com/images/jawnobyl.jpg" target="_blank" class="menu_links">jawnobyl (it happened)</a></p>
                    <p><span class="before-colon">-----------------------</span></p>
                    <p><span class="before-colon">Music stuffs:</span></p>
                    <p><span class="before-colon">sampled:</span> <a href="https://soundcloud.com/etienne-jacquot/powderlite-saapato-atnohs-remix?in=etienne-jacquot/sets/best-of-atn" target="_blank" class="menu_links_soundcloud">Powderlite (Saysdont's remix)</a></p>
                    <p><span class="before-colon">sample:</span> <a href="https://saapato.bandcamp.com/track/powderlight" target="_blank" class="menu_links_soundcloud">Powderlite - Saapato</a></p>
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