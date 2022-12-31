import React from 'react'
import './Services.css'
import Card from '../Card/Card';
import plumbing from '../../img/plumbing.png';
import ac from '../../img/ac.png';
import Electrician from '../../img/Electrician.png';
import Prices from './prices.pdf'
import { motion } from 'framer-motion'

function Services() {
    const transition = { duration: 2, type: 'spring'};
    return (
        <div className="services" id="services">
            {/* left side */}
            <div className="awesome">
                {/* dark mode */}
                <span style={{}}>Our</span>
                <span>Services</span>
                <span>
                    Quality Home Services, On Demand
                    <br />
                    Fair rates. Quality work. Outstanding service.
                </span>
                <a href={Prices} download>
                    <button className="button s-button">View Pricing</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right */}
            <div className="cards">
                {/* first card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={ac}
                        heading={"AC Service & Repairing"}
                        detail={"Hot or Cold, We’ve Got You Covered"}
                    />
                </motion.div>
                {/* second card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Electrician}
                        heading={"Electrician"}
                        detail={"Come Today For Secured Tomorrow."}
                    />
                </motion.div>
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={plumbing}
                        heading={"Plumbing"}
                        detail={"If water runs through it, we will fix it!"}
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    );
};


export default Services;
