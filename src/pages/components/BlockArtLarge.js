/* eslint-disable jsx-a11y/alt-text */
import './BlockArtLarge.css'
import Options_side_art from './Options_side_art'
import HeaderArtHome from "./HeaderArtHome"
import { useEffect, useState } from 'react';
import './img_profile.css'
import belle from "./94216003_847113199123818_8528177430386045050_n (1).jpg"

function BlockArtLarge() {

    const url = 'http://127.0.0.1:8000/art/teste/6/comments/';
    const uri = 'https://jsonplaceholder.typicode.com/todos/1'


    const jsonn = [{"id":9,"user_main":{"id":12,"nome":"ketlen aparecida","vulgo":"ketren","pathphoto":"img/69580472_894270460938476_5022640528101998592_n.jpg"},"users_collaborators":[{"id":10,"vulgo":"lukitinha"}],"slug":null,"likes":1,"name":"namorado broxa","description":"vei\r\no gustavo transpira impotencia\r\na ketren merecia um homi de verdade kkkkk\r\nto falando de mim nao\r\nvou nem falar quem éeeee","thumbs_path":"","genre":"romance","notas":null}]



    
 

    const domain = 'http://localhost:8000/'
    const appl = 'login/profile/'
    const art = 'art/artpage/'
    let id = '1/'

    
    // console.log(jsonn[0])




    return ( 
        // <a href={domain + art + jsonn[0].id}> 
        
          <div className='cont g' >
            <img src="/static/media/94216003_847113199123818_8528177430386045050_n (1).759625e64a751d4adbc9.jpg" height='384px' width='600px'>
              </img>
            
              <Options_side_art like={jsonn[0].likes} rating='12' props={jsonn[0].users_collaborators} />
                    <HeaderArtHome title ={jsonn[0].name}desc ={jsonn[0].description} props={jsonn[0].user_main}/>              
      
          
          
          </div>
          
    )
}




export default BlockArtLarge;



  // const [datas, setDatas] = useState([]);
      


      // fetch(uri)
      // .then((response) => response.json())
      // .then((data) => {
      //   setDatas(data)
      // })
      // .catch(err => console.log(err));


       
    // useEffect(() => {
    //   async function fetchData() {
    //     const response = await fetch('http://localhost:8000/art/teste/6/comments/');
        
        
        
    //     const data = await response.json();
    //     console.log((data));
        
    //   }
  
    //   fetchData();
    // }, []);
    


      // useEffect(() => {
      //   fetchData()
      // }, [])

      // function fetchData() {
      //   fetch(url)
      //     .then(response => response.json())
      //     .then(data => setData(data))
      //     .catch(error => console.error(error));
      //   }


    // const fetchData = () => {
    //   return fetch(url)
    //     .then(response => {
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         throw new Error('Não foi possível realizar a requisição.');
    //       }
    //     })
    //     .then(data => {
    //       console.log(data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }

    // const dados = fetchData();
    // console.log(dados)


    // function fetchData() {
    //   return fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //       return data;
    //     })
    //     .catch(error => console.error(error));
    // }


    
    // useEffect(() => {
    //   async function fetchData() {
    //     const response = await fetch('http://localhost:8000/art/teste/6/comments/');
        
        
        
    //     const data = await response.json();
    //     console.log((data));
        
    //   }
  
    //   fetchData();
    // }, []);