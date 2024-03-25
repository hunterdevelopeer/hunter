import React from 'react'
import { Link } from "react-router-dom";

import onlyfans from './assets/icons/only.png'
import instagram from './assets/icons/instagram.png'
import twitter from './assets/icons/twitter.png'

import perfil from './assets/images/perfil.gif'

export default function Home() {
  return (
    <div className='main'>
         <div class="content">
        <div class="col-6">
            
        </div>
        <div class="block">
            <div class="container">
                <div className="perfil">
                    <img src={perfil} alt="icon"></img>
                </div>
                <button>
                <img src={onlyfans} alt="icon" />
                    <a href="">ONLYFANS</a>
                </button>
                <button>
               
                <img src={twitter} alt="icon"></img>
                        <a href="">TWITTER</a>
                </button>
                <button>
                
                <img src={instagram} alt="icon"></img>
                        <a href="">INSTAGRAM</a>
                </button>
                <button class="custom">
                        <a href="">DONATE</a>
                </button>
            </div>
            <div class="back">
                <p> THANKS FOR CONNECTING WITH THIS PERFORMER HERE IF YOU WANT TO ENJOY A PRIVATE SHOW, CLICK HERE TO CONTACT OUR TEAM</p>
                <h3>Developed by <span><a href="https://twitter.com/HunterDeve19734" target='__blank'> HUNTER </a></span> | © Copyright 2024</h3>
           </div>
        </div>
    </div>
    </div>
  )
}
