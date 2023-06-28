import './Profile_name.css'



function Profile_name({nome, vulgo}) {
    return ( 
        <div>
            <div id = 'flex' >
                <div className = 'blur_name' > </div> 
                
                <h1 > {nome} </h1>
                <br></br>
                <h3 className='position-absolute'>{vulgo}_piolintouuui</h3>

            </div> 
        </div>
    )


}

export default Profile_name;