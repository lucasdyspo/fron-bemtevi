import '.components/arts_pages.css';
import foto from "../imgs/euzin.jpeg";
import 'components./HeaderArtHometitulo';
// import './Comments';
import Comments from 'components./Comments';

import Art_box from 'components./art_box';




function Art(props) {

    const data = [{ "id": 8, "content": "\"Essa foto me deixou sem palavras, queria conhecer você logo 🔥\"", "created_at": "2023-02-01T02:38:09.533959Z", "art": 6, "user": 3 }, { "id": 11, "content": "\"Essa foto me mostrou o quanto você é confiante e atraente, queria te conhecer mais 💘\"", "created_at": "2023-02-01T02:39:06.637796Z", "art": 6, "user": 9 }]
    console.log(data)



    const art = {
        "book1": {
            "title": "The Great Gatsby",
            "number_page": 180
        }
    }

    console.log(art.book1)

    return (
        <div className='caixa d-block'>

            <Comments content={data[0].content} posted={data[0].created_at} />
            <Comments content={data[1].content} posted={data[1].created_at} />
            <br></br>




        </div>
    )

}


export default Art