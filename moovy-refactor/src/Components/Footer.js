import {AiFillGithub,AiFillInstagram,AiFillLinkedin} from "react-icons/ai";
import styles from '../Modules/Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.redesSociais}>
                <li >
                    <a href="https://github.com/mateusaugust" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mateus_augustoo_/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </li>
                <li>
                     <a href="https://www.linkedin.com/in/mateusaugusto-dev/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                </li>
            </ul>
        </footer>

    )
    
}

export default Footer