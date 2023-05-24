
import { useState} from 'react';

import styles from '../Modules/Search.module.css'
import CardSearch from '../Cards/CardSearch'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { Scrollbars } from 'react-custom-scrollbars-2';






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
            <div className={styles.divBarSearch}>
        
             
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
                            inputProps={{ 'inter': 'aria-label' }}
                            onChange={(e) => setTerm(e.target.value)}
                        />
                        <IconButton  onClick={handleSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        
                    </Paper>
               
                <div className={styles.divPosition}>
                    <div className={styles.divPesquisa}>
                        <Scrollbars style={{ width:'100%', height: '100%'} }>
                            <div className={styles.divContainer}>
                                {filmes.map((filme) =>{
                                    return(
                                        <CardSearch key={filme.id} {...filme}/>   
                                    )
                                    })

                                } 
                            </div>
                        </Scrollbars>  
                    </div> 
                </div> 
            </div>
    )
}

export default Search