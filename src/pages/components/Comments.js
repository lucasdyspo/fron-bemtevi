import foto from "../imgs/euzin.jpeg";




function Comments({content, posted}) {



    return(

        <div className = 'comments container' >

                        <div className="align-text-bottom">
                             <h1 className="'text-center "> eu memo </h1>
                            <img className = "profile" src = { foto }/> 
                           
                            <br></br>
                            <p id='posted'> {posted}</p>
                        </div> 
                        
                        <div className="container-sm">
                        <p> {content}´pki</p>
                        
                        </div>
            </div> 
     )

};

export default Comments;