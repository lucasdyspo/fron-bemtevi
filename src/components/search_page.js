import ImagemG from "./imagemG";
import Hgs from "./hgs";
import './homepage.css';
import ImagemM from "./ImageM";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// import {withRouter} from 'react-router-dom';
import Search from "./search_home";

const Search_page = (props) => {
    console.log(window.location.href)

     const params = new URLSearchParams(window.location.search);
     const searchValue = params.get("search"); 
     console.log(searchValue)




    const url = 'apisearch'

    

   






    return ( 
        <div>
            <br></br>
            <br></br>
                <Search/>
                <br>
                </br>
            
                <div>
                    <h4 className="fw-normal">
                        Exibindo resultados para <strong>{searchValue}</strong>
                    </h4>
                </div>


        <div className="d-grid gap-5">
            <nav className="d-flex">


            
            <ImagemM/>
            
            <ImagemM/>
            <ImagemM/>
        

            </nav>
            <nav className="d-flex">


                        
            <ImagemM/>

            <ImagemM/>
            <ImagemM/>


            </nav>
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
