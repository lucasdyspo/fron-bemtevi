import './hgs.css'
import Box_direita from './box_direita'
import { useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap';




export default function Hgs() {
  
        


    
        const [data, setData] = useState([]);
      
        useEffect(() => {
          fetch('http://localhost:8000/api/highlights/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
        }, []);



      
    //     return (
    //       <div>
    //         {data.map(item => (
    //           <MyComponent key={item.id} data={item} />
    //         ))}
    //       </div>
    //     );
    //   }

    let registros = [
        {
          "titulo": "Título 1",
          "descricao": "Descrição 1"
        },
        {
          "titulo": "Título 2",
          "descricao": "Descrição 2"
        },
        {
          "titulo": "Título 3",
          "descricao": "Descrição 3"
        },
        {
          "titulo": "Título 4",
          "descricao": "Descrição 4"
        },
        {
          "titulo": "Título 5",
          "descricao": "Descrição 5"
        }
      ];

    return(
        <div className='hgs'>
            <div className='editor_choices'>
                highlights devs
            </div>
            {/* {Objects.keys(data.results).keys.map((it) => (
                console.log(it)
            ))
            } */}

            {/* {console.log(data.json)} */}

            {/* {console.log(Object.keys(data))} */}
            {/* {console.log((data.count))} */}

            {/* {(data.results).map((item) => (

                

                <Box_direita props={item}/>
            
            ))} */}

            {/* {registros.map((registro) => (

           
            <Box_direita props={registro}/>
            
            ))} */}

          

            
        </div>
       )

};



// {data.map((item) => (
//     <h1>
//         {console.log(item)}
//         {item.id}
//     </h1>
// ))}