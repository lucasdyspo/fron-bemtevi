import BlockArtLarge from "./BlockArtLarge";
import Selected_by_dev from "./Selected_by_dev";
import '../page_home.css';
import ImagemM from "./ImageM";
import { Link } from "react-router-dom";
import { useState } from "react";
import { hydrate } from "react-dom";
import { EventHandler } from "react";
// import Loader from "./loader";


function Search(props) {

    const [Search, setSearch] = useState("");

    function searchLoad(e) {
        props.history.push("/search")
    }

    console.log((props))

    return (

        <div>
            <form method="GET" onSubmit={searchLoad} action="/search">
                <input onChange={e => setSearch(e.target.value)} className="form-control" type="text" placeholder="search" id="search" name="search"></input>

            </form>

        </div>


    )
};




export default Search;
