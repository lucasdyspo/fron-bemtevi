import { useState } from "react";
import "./MyForm.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaHandPointUp, FaBitcoin, FaHeart, FaHandHolding, FaPeopleArrows, FaSeedling, FaUsers, FaThumbsUp, FaRegStickyNote } from "react-icons/fa"

/*6 - controlled inputs */
function Myinsights({like, rating, props}) {
    const domain = 'http://localhost:8000/'
    const appl = 'login/profile/'
    let id = '1/'
    // console.log(props)


    return (

       
            <ul className="d-flex list-inline justify-content-between myinsights ">
                <li>4.8</li>
                <li>
                 <FaInstagram />
                </li> 

                <li> <FaHeart/> </li>
                <li> <FaThumbsUp/> </li>  
              
            
            </ul> 
       
    );
};

export default Myinsights;