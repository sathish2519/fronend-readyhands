import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
// import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Floatindiv from "../FloatingDiv/Floatingdiv";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import approve from "../../img/approve.png";
import { motion } from 'framer-motion'
// import { NavBtn,NavBtnLink } from "./ButtonElement";
import {  useNavigate } from "react-router-dom";

const Intro = () => {
    const transition = { duration: 2, type: 'spring' };

    // const history = useHistory();

    // const SignInPage = () => {
    //     history.push("/sigin")
    // }
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/sigin';
        navigate(path);
    }


    return (
        <div className="Intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
                    {/* yahan change hy darkmode ka */}
                    <span>Welcome</span>
                    <span>We are Ready Hands</span>
                    <span>
                        Just say hello we are ready to serve. let's get started!
                    </span>
                </div>
                {/* <NavBtn className="button i-button">
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn> */}
                <button className="button i-button" onClick={routeChange}>Sign In</button>
                {/* social icons */}
                <div className="i-icons">
                    {/* <img src={Github} alt="" />
                <img src={LinkedIn} alt="" /> */}
                    <img src={Instagram} alt="" />
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: "-25%" }}
                    transition={transition}
                    src={crown} alt="" />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <Floatindiv img={approve} text1='Quality' text2="Assured"></Floatindiv>
                </motion.div>
                <motion.div
                    initial={{ left: "20rem", top: "18rem" }}
                    whileInView={{ left: "3rem" }}
                    transition={transition}
                    className="floating-div"
                >
                    <Floatindiv img={thumbup} text1='24/7' text2="Support"></Floatindiv>
                </motion.div>

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;