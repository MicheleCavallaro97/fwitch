import React, { useState } from 'react';
import Visualizza from './visualizza'
import { searchStreams } from '../../api/twitch';


const Content = (props) => {
  const [channels, setChannels] = useState()

  async function sceltaCat(event) {
    let dati 
    let scelta = event.target.getAttribute("scelta");
    console.log(scelta)
     await searchStreams({ game_id: scelta }).then(response => dati = response.data)
    inserisciDati(dati)
  }
  function inserisciDati(dati){
    setChannels(dati)
  }
  return <div>
    {props.topGames.map((elem) => {
      return <a href="#" onClick={sceltaCat}><img scelta={elem.id} src={elem.box_art_url}></img></a>
    })
    }
    <Visualizza streams = {channels}></Visualizza>
  </div>;
};

export default Content;
