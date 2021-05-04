import React, { useEffect } from 'react'

export default class Visualizza extends React.Component{

  render(){
    if(typeof(this.props.streams) != "undefined"){
    return <div>
          {
            this.props.streams.map(elem=>{
              var url = elem.thumbnail_url.replace("{width}x{height}","480x320")
              return <div style={{paddingLeft:"30px"}}>
                <br></br><br></br>
              <img src={url}></img>
              <br></br>
              <br></br>
              <span>{elem.user_name}</span></div>
            })
          }
    </div>
  }else{
    return <div></div>
  }
}
}