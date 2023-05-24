import styles from '../Modules/Libary.module.css'
import { Scrollbars } from 'react-custom-scrollbars-2';

import { useEffect, useState} from 'react';
import CardLibary from '../Cards/CardLibary';

  
function Library(){

    const [filmes, setFilmes] = useState([])

   async function teste(){

    let filme = []

    for(let i =0; i<localStorage.length;i++){
       
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
         
        try {
            let response = await fetch(value);
            let data = await response.json();
            filme.push(data);
          } catch (error) {
      
          }
    } 

     return filme
   }

   useEffect(()=>{
        teste().then(response=> {setFilmes(response)})
    },[])



    return(
        //usar section e outras tags para seguir semantica do html
        
        <div className={styles.divPosition}>
            <div className={styles.divPesquisa} >
                <Scrollbars style={{ width:'100%', height: '80vh'} }>
                <div className={styles.divContainer}>
                    {filmes?.map((filme , index) =>(
                        <div key={index}>
                            <CardLibary {...filme}/>
                        </div>
                        ))
                    }
                    
                </div>
                </Scrollbars>
            </div>
                 
        </div>
       
    )

    }


export default Library
