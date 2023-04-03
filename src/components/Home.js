import ImagemG from "./imagemG";
import Hgs from "./hgs";
import './homepage.css';
import ImagemM from "./ImageM";
import { Link } from "react-router-dom";
import { useState } from "react";
import { hydrate } from "react-dom";
import { EventHandler } from "react";
import Loader from "./loader";
import Search from "./search_home";


function Home(props) {

 
    return ( 
        <div className='pagehome'>
             

                <Search/>
                <Loader/>

            
            
                <div className="ballon_words">
                    <ul className="list-inline justify-content">
                        <li className="list-inline-item">    rexemplo                </li>
                        <li className="list-inline-item"> comééedia </li>
                        <li className="list-inline-item">draaaam uiii</li>
                    </ul>
                    
                </div>
            <div className="d-grid gap-5">

                    <ImagemG/>
                    <ImagemG/>
                    <div className="contaiffn">
                        <div className="d-flex justify-content-center">

                            <ImagemM/>
                            <ImagemM/>
                        </div>
                    </div>


                    <div className="container-lg">
                        <div className="d-flex justify-content-center">

                            <ImagemM/>
                            <ImagemM/>
                        </div>
                    </div>
                    
            <ImagemG/>
            


           

            </div>
            
            <Hgs/>

        </div>
    )
}




export default Home;
