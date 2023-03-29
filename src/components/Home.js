import ImagemG from "./imagemG";
import Hgs from "./hgs";
import './homepage.css';
import ImagemM from "./ImageM";
import { Link } from "react-router-dom";


function Home() {

    



    return ( 
        <div className='pagehome'>
                <div>
                    <form method="GET" action="#" >
                        <input className="form-control" type="text" placeholder="search" name="search"></input>
                    </form>
                    
                </div>
            
            
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
            <div className="container-lg">
            <div className="d-flex justify-content-center">

            <ImagemM/>
            <ImagemM/>
            </div>
            </div>


            <div className="container-lg">
            <div className="d-flex">

            <ImagemM/>
            <ImagemM/>
            </div>
            </div>
            <div>
                <ImagemG/>
            </div>


           

            </div>
            
            <Hgs/>

        </div>
    )
}




export default Home;
