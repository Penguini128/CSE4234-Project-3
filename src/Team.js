import React from 'react';
import style from './Style';
import { createUseStyles } from 'react-jss';
import teamMembers from './TeamMembers';

const useStyles = createUseStyles(style);

function Team() {
    const classes = useStyles();
    return (
        <div className={classes.teamContainer}>
            {
                teamMembers.map((member) => (
                    <div className={classes.flipCard}>
                        <div className={classes.flipCardInner}>
                            <div className={classes.flipCardFront}>
                                <h1>{member.name}</h1>
                                <img className={classes.teamImage} src={member.image} alt="Profile Image"/>
                            </div>
                            <div className={classes.flipCardBack}>
                                <h1>{member.name}</h1>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Team;
