import React, { useState } from 'react';
import Visualizza from './visualizza'
import { getGames} from '../../api/twitch';


const Content = (props) => {

function sceltaCat(event){
          let dati=[]
          let scelta= event.target.getAttribute("scelta");
          console.log(scelta)
          getGames({ name :scelta }).then(console.log)
          
  }
  return <div>
       {props.topGames.map((elem)=>{
                            return<a href="#" onClick={sceltaCat}><img scelta={elem.name} src={elem.box_art_url}></img></a>})
                            }
        <Visualizza ></Visualizza>
  </div>;
};

export default Content;
