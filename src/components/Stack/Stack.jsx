import React from 'react'
import Vscode from '../../assets/images/vscode.png'
import firebase from '../../assets/images/firebase.png'
import react from '../../assets/images/react.png'
import figma from '../../assets/images/figma.png'
import git from '../../assets/images/git.png'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import Vercel from '../../assets/images/vercel.png'
import './Stack.css'

const Stack = () => {
  return (
    <div className='tools' data-aos="zoom-in" data-aos-delay="600">
              <p>My Tech Stack</p>
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={react} alt="" />
              <img src={Vscode} alt="" />
              <img src={firebase} alt="" />
              <img src={figma} alt="" />
              <img src={git} alt="" />
              <img src={Vercel} alt="" />
            </div>
  )
}

export default Stack