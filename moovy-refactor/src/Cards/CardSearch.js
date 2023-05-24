import styles from '../CardsModules/CardSearch.module.css'
import Button from '@mui/material/Button';
import { useState } from 'react';

import { BsFillStarFill } from "react-icons/bs";

function CardSearch(props){
    const apiLinkImg = 'https:/image.tmdb.org/t/p/w500/'

    const[isAdd,setIsAdd]=useState(Boolean(localStorage.getItem(props.id)))
    
    const addStorage = () =>{

        let url = 'https://api.themoviedb.org/3/movie/'+props.id+'?api_key=4f29b990a89a1383d4f6c9af65fec3c5&language=en-US'
        localStorage.setItem(props.id,url)
       
        setIsAdd(true)
    }

    return(
        <div className={styles.cardGeral}>
            <div className={styles.image}>
                <img src = {props.poster_path ? apiLinkImg+props.poster_path : "https://images.unsplash.com/photo-1620177088163-012f511de69d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"} 
                alt="imagemPosterFilme"/>
                <div className={styles.overView}>
                    <h2 className={styles.titleOverview}>Overview:</h2>
                    <h3 className={styles.overviewInfo}>{props.overview}</h3>
                </div>
            </div>
            <div className={styles.info}>
                <p>{props.title}</p>
                <div className={styles.infoDescription}>
                    <BsFillStarFill className={styles.star}/>
                    <p className={styles.voter}>{props.vote_average.toFixed(1)}</p>
                    <Button onClick={addStorage} variant="contained" sx={
                    isAdd ? {backgroundColor:'#ffbc11',height:'1.9rem', width:'6rem',mr:'1.5rem'} 
                    : {backgroundColor:'#0ACF83', height:'1.9rem', width:'6rem',mr:'1.5rem', mt:'0.2rem'}} 
                    >{isAdd ?"Adicionado" : "Adicionar"}</Button>
                </div>
            </div>
        </div>
    )
}
export default CardSearch;
