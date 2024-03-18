import React from 'react';
import style from './Style';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(style)

function Team() {
    const classes = useStyles();
    return (
           <div className={classes.flipCard} >
               <div className = {classes.flipCardInner} >
                   <div className = {classes.flipCardFront}>
                       <img className = {classes.teamImage} src = "./images/tommy_headshot.png" alt="Avatar" />
                   </div>
                   <div className = {classes.flipCardBack} >
                       <h1>Tommy Galletta</h1>
                       <p> Tommy Galletta is a current student at the Florida Institute of Technology majoring in
                           Computer Science. He currently works under Dr. Debasis Mitra in the Biomedical Computing Lab
                           on campus. In the lab, he has helped to create simulations for PET and SPECT imaging,
                           as well as working with neural networks to perform basic reconstructions based on simulation
                           data.
                       </p>
                   </div>
               </div>
           </div>
    )
}

export default Team;