import ImagemG from "./imagemG";
import Hgs from "./hgs";
import './homepage.css';
import ImagemM from "./ImageM";
import { useState } from "react";
// import {withRouter} from 'react-router-dom';

function Search_page(props) {
    console.log(props)


    const [posts, setPosts] = useState([])
    const url = 'apisearch'

    console.log(props.location)
    const [Search, setSearch] = useState("");

    function searchLoad(e) {
        props.history.push("/search")
    }  

   






    return ( 
        <div className='container'>
            <br></br>
            <br></br>
                <div>
                <form method="GET"  onSubmit={searchLoad} >
                <input onChange={e => setSearch(e.target.value)} className="form-control" type="text" placeholder="search" id="search" name="search"></input>
                    </form>
                </div>
                <br>
                </br>
            
                <div>
                    <h4 className="fw-normal">
                        Exibindo resultados para <strong>paalavra</strong>
                    </h4>
                </div>


        <div className="d-grid">
            <nav className="d-flex">


            
            <ImagemM/>
            
            <ImagemM/>
            <ImagemM/>


            </nav>
        </div>

            
            

        </div>
    )
}




export default Search_page;
