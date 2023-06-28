import foto from "../imgs/euzin.jpeg";
import Comments from ".components/Comments";
import Art_box from ".components/art_box";
import '.components/arts_pages.css';
import '.components/dropdotitulo';
import Art from ".components/arts_pages";
// import './Comments';



function Art_page({number, title}) {

    return(
        <div className="d-flex container justify-content-center sec">
        
            <div>
            <h1>tiitulo da obra</h1>
            <p>descriçao dooo paaaai aaaai mdeuuuus puta que o paaariu</p>
            </div>


            <div className="d-grid gap-5">

                <div className="d-flex justify-content-around">
                <Art/>
                <Art_box/>
                <div>
                <div className="box_commits"></div>
                <br></br>
                <div className="box_obs"></div>
                </div>
                </div>


                <div className="d-flex justify-content-around">
                <Art/>
                <Art_box/>
                <div>
                <div className="box_commits"></div>
                <br></br>
                <div className="box_obs"></div>
                </div>
                </div>

        

            



      
        </div>
        </div>
    )
}

export default Art_page