import React from 'react';
import style from './Style';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(style)

function Team() {
    const classes = useStyles();
    return (
        <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>

                    <h1>Tommy Galletta</h1>
                    <img className={classes.teamImage} src="./images/tommy_headshot.png" alt="Profile Image"/>
                </div>
                <div className={classes.flipCardBack}>
                    <h1>Tommy Galletta</h1>
                    <p> Tommy Galletta is a current student at the Florida Institute of Technology majoring in
                        Computer Science. He currently works under Dr. Debasis Mitra in the Biomedical Computing Lab
                        on campus. In the lab, he has helped to create simulations for PET and SPECT imaging,
                        as well as working with neural networks to perform basic reconstructions based on simulation
                        data.

                        When he isn't studying, Tommy likes to sing, read, play video games, and play Dungeons & Dragons
                        . He likes performing, and in the future, he hopes to provide entertainment to the world in one
                        way or another.
                    </p>
                </div>
            </div>

            <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>

                    <h1>Logan Klaproth</h1>
                    <img className={classes.teamImage} src="./images/logan_headshot.jpg" alt="Profile Image"/>
                </div>
                <div className={classes.flipCardBack}>
                    <h1>Logan Klaproth</h1>
                    <p> Logan Klaproth is a Junior in the Bachelor's program for Computer Science at Florida Tech with a
                        concentration in Cyber Operations.
                        Last year, he interned in compliance at Northrop Grumman as a Cybersecurity intern.
                        Before that, he worked for the City of Melbourne as a Recreation leader for a team in charge of
                        managing a recreation facility and its events.
                        Following his employment at the City he took an opportunity to study abroad at Oxford University
                        in the United Kingdom.
                        There, he made connections with fellow students, acquired skills for traversing foreign places,
                        and, of course, studied.
                        He was enrolled in Probability and Statistics, taught by Dr. Christina Sebu, and Science and
                        Technical Communications,
                        led by Dr. Agota Marton and Dr. Henry Mead.
                        Outside of classes, he spends a lot of time with my friends planning many social gatherings,
                        such as movie nights and dinners. When he’s alone, however, he likes to spend most of his time
                        working towards skills in vulnerability research, listening to music, or occasionally watching
                        MMA fights on the weekends.
                    </p>
                </div>
            </div>


            <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>

                    <h1>Haley Hamilton</h1>
                    <img className={classes.teamImage} src="./images/haley_headshot.png"  alt="Profile Image"/>
                </div>
                <div className={classes.flipCardBack}>
                    <h1>Haley Hamilton</h1>
                    <p> Haley Hamilton is a Software Engineering student at the Florida Institute of Technology.
                        She has experience coding in C++, Python, and Java, and is currently studying webapps and using
                        HTML/CSS/Javascript as well as React.js and Node.js. She currently has an internship with Boeing
                        where she develops, modifies, and maintains software for the Starliner spacecraft.

                        Apart from her studies, she enjoy various creative hobbies such as art (including drawing,
                        painting, and sometimes sculpting), photography (especially with film camera), and planning the
                        piano (well a keyboard really). Her goals for the future include graduating with my bachelors
                        degree in Software Engineering, growing her knowledge and expertise in the software/programming
                        world, and traveling to exercise her photography skills.
                    </p>
                </div>
            </div>


            <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>

                    <h1>Shreyal Ganna</h1>
                    <img className={classes.teamImage} src="./images/shreyal_headshot.jpg"  alt="Profile Image"/>
                </div>
                <div className={classes.flipCardBack}>
                    <h1>Shreyal Ganna</h1>
                    <p> Shreyal Ganna, a computer engineering student at the Florida Institute of Technology, is deeply
                        passionate about web development. With a focus on creating, developing, and deploying web
                        applications using the MERN (MongoDB, Express.js, React, Node.js) stack, Shreyal aspires to
                        carve out a career as a proficient MERN stack developer. With internship experience and a
                        background in crafting demo web pages using HTML, CSS, and JavaScript, Shreyal is committed to
                        honing skills necessary for designing, deploying, and scaling web applications.
                        Eager to stay abreast of the latest industry trends, Shreyal is dedicated to continuous
                        learning and aims to offer innovative solutions to real-world challenges in the dynamic tech
                        landscape. Excited about the future prospects, Shreyal looks forward to leveraging expertise
                        and knowledge to contribute meaningfully to the field of web development.

                    </p>
                </div>
            </div>


            <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>

                    <h1>Maria Linkins-Nielsen</h1>
                    <img className={classes.teamImage} src="./images/maria_headshot.jpeg"  alt="Profile Image"/>
                </div>
                <div className={classes.flipCardBack}>
                    <h1>Maria Linkins-Nielsen</h1>
                    <p> Maria is a sophomore studying Computer Science and Cybersercurity at the Florida Institute of
                        Technology. This semester, Maria has stepped into the position of Vice President for FITSEC,
                        Florida Tech's cybersecurity club. Through the club, Maria has been able to participate in many
                        CTF or 'Capture the Flag' competitions. This summer, Maria plans to complete an internship in Maryland
                        with the Department of Defense and is excited to get some hands on experience in her field.
                        Outside of academics, Maria enjoys participating in the Florida Tech Competative Volleyball Club
                        , as well as participating in Greek Life. She also enjoys reading, going to the beach, and cooking.
                    </p>
                </div>
            </div>


        </div>


    )
}

export default Team;
