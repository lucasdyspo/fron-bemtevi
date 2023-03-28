import './imagemG.css'
import MyForm from './MyForm'
import Drop from "./dropdotitulo"
import { useEffect, useState } from 'react';
import Myinsights from './insights_art';
function ImagemM() {

    const url = 'http://127.0.0.1:8000/art/teste/6/comments/';
    const uri = 'https://jsonplaceholder.typicode.com/todos/1'


    const jsonn = [{"id":9,"user_main":{"id":12,"nome":"ketlen aparecida","vulgo":"ketren","pathphoto":"img/69580472_894270460938476_5022640528101998592_n.jpg"},"users_collaborators":[{"id":10,"vulgo":"lukitinha"}],"slug":null,"likes":1,"name":"namorado broxa","description":"vei\r\no gustavo transpira impotencia\r\na ketren merecia um homi de verdade kkkkk\r\nto falando de mim nao\r\nvou nem falar quem éeeee","thumbs_path":"","genre":"romance","notas":null}]



    
 

    const domain = 'http://localhost:8000/'
    const appl = 'login/profile/'
    const art = 'art/artpage/'
    let id = '1/'

    
    console.log(jsonn[0])




    return ( 
        <>
        <div className='m'>
        <a href={domain + art + jsonn[0].id}> 
        <div className='cont m' >
            
           
             
                
                {/* <MyForm like={jsonn[0].likes} rating='12' props={jsonn[0].users_collaborators}/> */}
                <Drop title ={jsonn[0].name} props={jsonn[0].user_main}/>
            
                
            
        </div>
        
        </a>
        <Myinsights/>
       </div>
       </>
    )
}




export default ImagemM;