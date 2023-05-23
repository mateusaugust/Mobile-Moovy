
import { useState} from 'react';

import styles from '../Modules/Search.module.css'
import CardSearch from '../Cards/CardSearch'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';






function Search (){
    
    const apiSearch = 'https://api.themoviedb.org/3/search/movie?api_key=4f29b990a89a1383d4f6c9af65fec3c5&query='

    const[filmes, setFilmes] = useState([])
    const[term, setTerm] = useState('')
   
    
  

    const handleSearch = (e) =>{
       e.preventDefault()

       fetch(apiSearch+term).then(res=>res.json())
       .then(data=> setFilmes(data.results))
    }

    return(
       
        <section>
            <div className={styles.divPosition}>
        
             
                    <Paper
                    component="form"
                    sx={{ mt:'10px',p: '5px 10px', display: 'flex', alignItems: 'center',
                    backgroundColor:'#baffd0'
                    }}
                    >
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                           
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar Filme"
                            inputProps={{ 'Inter': 'aria-label' }}
                            onChange={(e) => setTerm(e.target.value)}
                        />
                        <IconButton  onClick={handleSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        
                    </Paper>
               

                <div className={styles.divPesquisa}>
                {filmes.map((filme) =>{
                    return(
                        <CardSearch key={filme.id} {...filme}/>   
                    )
                    })

                }   
                </div>  
            </div>
        </section>
    )
}

export default Search