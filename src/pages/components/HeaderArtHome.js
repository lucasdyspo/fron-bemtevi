import foto from "../imgs/euzin.jpeg"
import './HeaderArtHome.css'


function HeaderArtHome({ title, desc, props }) {
    // console.log(props)
    const domain = 'http://localhost:8000/'
    const appl = 'login/profile/'
    const art = 'art/artpage/'


    return (
        <nav className="HeaderArtHomeg">
            <div>
                <a href={domain + appl + props.id}></a>
                <img className="profile" src={foto} />
                <p>{props.vulgo}</p>
            </div >
            <div>
                <div>
                    <h4> {title} </h4>
                    <article> {desc} </article>
                </div>
            </div>


        </nav>
    )

}


export default HeaderArtHome