import './shadow_back.css'
function Shadow({id, title, description}) {


    return (

       
            <div className = "shadow" >

                <div>
                    <h1> {title} </h1> 
                    <p> {description} </p>
                </div>

            </div>
     


    )

}


export default Shadow;