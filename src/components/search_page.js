import ImagemG from "./imagemG";
import Hgs from "./hgs";
import './homepage.css';
import ImagemM from "./ImageM";

function Search_page() {

    



    return ( 
        <div className='pagehome container'>
            <br></br>
            <br></br>
                <div>
                    <form action="#" method="GET">
                        <input className="form-control" type="text" placeholder="search"></input>
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
