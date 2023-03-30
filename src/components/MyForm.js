import { useState } from "react";
import "./MyForm.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaHandPointUp, FaBitcoin, FaHeart, FaHandHolding, FaPeopleArrows, FaSeedling, FaUsers, FaThumbsUp, FaRegStickyNote } from "react-icons/fa"

/*6 - controlled inputs */
function MyForm({like, rating, props}) {
    const domain = 'http://localhost:8000/'
    const appl = 'login/profile/'
    let id = 1
    // console.log(props)


    function like(postid) {
        // faz alguma coisa com os parâmetros
          console.log(postid)
          const domain = 'http://localhost:8000/'
          const appl = 'api/post/'
          let id = postid
          const sufix = '/like/'

          const endpoint = domain + appl + id + sufix
          
          fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"Post": postid })
          })
          .then(response => response.json())
          .then(data => {
            console.log(data); // faça algo com os dados recebidos do servidor
          })
          .catch(error => {
            console.error(error); // lida com erros de requisição
          });
        }


    return (

        <div className="side">
            <ul>
                <li>{rating}</li>
                <li>
                    
                    <FaInstagram />
                </li> 

                <li className = "btn"> <FaHeart/> </li>
                <a href={domain + appl + id}> <li>   <FaRegStickyNote/> </li> </a>
                <li><button onClick={like(2)} className="like" ><FaThumbsUp/></button></li>  
                <li> <FaUsers/> </li> 
              
            
            </ul> 
        </div>
    );
};

export default MyForm;