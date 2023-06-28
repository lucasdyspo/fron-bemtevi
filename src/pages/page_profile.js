import './profile_page.css'
import Profile_name from '.components/Profile_name';
import Ballons_profile from 'components./ballons_profile';
import Img_profile from 'components./img_profile';
import ImagemG from 'components./imagemG';



function Profile() {

    const data = [{"id":5,"friends":1,"arts_realizatas":3,"users_collaborators":1,"nome":"sabrina hungaro","vulgo":"sassa","similarity":null,"pathphoto":"","register":12}][0]

    console.log(data)
    return (
        <div>
        <div>     
        <div>
            <div className = 'capa' >
                <div className = 'margin' >
                    <Profile_name nome={data.nome} vulgo={data.vulgo}/>
                </div>

                <div>
                    <Img_profile image={data.pathphoto}/>
                </div> <div>
                    <Ballons_profile/>
                </div>


                </div> 
                <div className = 'op'>
                <ol className=" myinsights d-flex list-inline justify-content-evenly gap-4">
                    <li> {data.arts_realizatas + data.users_collaborators} Arts </li> 
                    
                    <li> {data.friends} followers </li> 
                </ol>
                <div>
                <ol className=" myinsights d-flex list-inline gap-4">
                    <li> instagram </li> 
                    <li> Linkedin </li> 
                </ol>
                </div>
            </div>
        </div>
        <div className="container">
            <div className='d-flex'>
            <ImagemG/>
            <ImagemG/>
            </div>

            <div className='d-flex'>
            <ImagemG/>

            <ImagemG/>
            </div>

            </div>

        </div>

        </div>
    )


}

export default Profile;