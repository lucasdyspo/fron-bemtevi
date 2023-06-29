import BlockArtLarge from "./components/BlockArtLarge";
import Selected_by_dev from "./components/Selected_by_dev";
import './page_home.css';
import ImagemM from "./components/ImageM";
import { Link } from "react-router-dom";
import { useState } from "react";
import { hydrate } from "react-dom";
import { EventHandler } from "react";
import Loader from "./common/loader";
import Search from "./components/search_home";


function Home(props) {


    return (
        <div className='pagehome'>


            <Search />
            <Loader />



            <div className="ballon_words">
                <ul className="list-inline justify-content">
                    <li className="list-inline-item">    rexemplo                </li>
                    <li className="list-inline-item"> comééedia </li>
                    <li className="list-inline-item">draaaam uiii</li>
                </ul>

            </div>
            <div className="d-grid gap-5">

                <BlockArtLarge />
                <BlockArtLarge />
                <div className="contaiffn">
                    <div className="d-flex justify-content-center">

                        <ImagemM />
                        <ImagemM />
                    </div>
                </div>


                <div className="container-lg">
                    <div className="d-flex justify-content-center">

                        <ImagemM />
                        <ImagemM />
                    </div>
                </div>

                <BlockArtLarge />





            </div>

            <Selected_by_dev />

        </div>
    )
}




export default Home;
