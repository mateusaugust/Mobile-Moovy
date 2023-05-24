/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import styles from '../CardsModules/CardLibrary.module.css'
import { BsFillStarFill } from "react-icons/bs";
import Button from '@mui/material/Button';

function CardLibary(props){
    
    const apiLinkImg = 'https:/image.tmdb.org/t/p/w500/'

    const[dialogo, setDialogo] = useState(false)

    const chamaConfirmacao = () =>{
        setDialogo(true)
    }

    const remove = (condicao) => {

        if(condicao){
            localStorage.removeItem(props.id) 
            window.location.reload(true)
            setDialogo(false)
        }else{
            setDialogo(false)
        }
      
    }

    return(
        
        <div className={styles.cardGeral}> 
            <div className={styles.image}>
                <img src = {props.poster_path ? apiLinkImg+props.poster_path : "https://images.unsplash.com/photo-1620177088163-012f511de69d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"}/>
                <div className={styles.overView}>
                    <h2 className={styles.titleOverview}>Overview:</h2>
                    <h3 className={styles.overviewInfo}>{props.overview}</h3>
                </div>
            </div>

          
            <div className={styles.info}>
                <div>
                    {dialogo &&(
                        <div className={styles.divConfirmacao}>
                            <p>Deseja remover esse card?</p>
                            <Button variant='contained'
                            sx={{backgroundColor:'#0ACF83'
                            , color:'black',width:'100px',
                            mr:1
                            }}
                            onClick={() => remove(true)}>Confirmar</Button>
                            <Button variant='contained'
                             sx={{backgroundColor:'#e03430'
                             , color:'black'}}
                            onClick={() => remove(false)}>Cancelar</Button>
                            
                        </div>
                    )

                    }
                </div>
                <p className={styles.titleFilme}>{props.title}</p>

                <div className={styles.infoDescription}>
                    <BsFillStarFill className={styles.star}/>
                    <p className={styles.voter}>{props.vote_average.toFixed(1)}</p>
                    <Button 
                        variant="contained"
                        onClick={chamaConfirmacao}

                        sx={{
                            backgroundColor:'#ffbc11',
                            height:'1.9rem', width:'6rem',mr:'1.6rem'
                            
                        }}
                    >Remover</Button>     
                </div>
            </div>
        </div>
        
    )
}


export default CardLibary