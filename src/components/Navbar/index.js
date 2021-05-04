
import React, { useEffect } from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import useProfile from '../../hooks/useProfile';
import classes from './navbar.module.css';
import {useState} from 'react'

const Navbar = (props) => {
  const { loading, error, user } = useProfile();


  async function passaDati(event){
    let dati = []
          switch(event.target.id){
            case "categorie":
              await searchCategories({query:"/"}).then(response => dati=response.data)
                  props.getTop(dati)
              break;
              case "top":
                await getTopGames({after: '',before: '',first: 10,width: '188',height: '250',}).then(response=>dati=response.data)
                props.getTop(dati)
              break;
          }
      
  }
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__item}>
        <a href="#" id="categorie" onClick={passaDati}>Sfoglia categorie</a>
        <a href="#" id="top" onClick={passaDati}>Top games</a>
      </div>

      <div className={classes.navbar__item}>
        {!loading ? (
          <img
            src={user.profile_image_url}
            className={classes.avatar}
            alt="Profile"
            width={60}
          />
        ) : (
          <div className={classes.avatar} style={{ width: 60, height: 60 }} />
        )}
      </div>
    </nav>
  );

};
export default Navbar;