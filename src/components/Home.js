import ImagemG from "./imagemG";
import Hgs from "./hgs";
import './homepage.css';
import ImagemM from "./ImageM";
import { Link } from "react-router-dom";
import { useState } from "react";
import { hydrate } from "react-dom";
import { EventHandler } from "react";
import Loader from "./loader";


function Home(props) {

   const [Search, setSearch] = useState("");

    function searchLoad(e) {
        props.history.push("/search")
    }  

    return ( 
        <div className='pagehome'>
                <div>
                    <form method="GET"  onSubmit={searchLoad} action="/search">
                        <input onChange={e => setSearch(e.target.value)} className="form-control" type="text" placeholder="search" id="search" name="search"></input>
        
                    </form>
                    
                </div>


                <Loader/>

            
            
                <div className="ballon_words">
                    <ul className="list-inline justify-content-around">
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
