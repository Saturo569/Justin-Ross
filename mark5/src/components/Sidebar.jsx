import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faBars, faCircleInfo, faFolder, faCode} from '@fortawesome/free-solid-svg-icons';



const links = [
    
    {href: '#about', label: 'About me', icon: faCircleInfo},
    {href: '#projects', label: 'Projects', icon: faFolder},
    {href: '#skills', label: 'Skills', icon: faCode},
   


]
function Sidebar(){
    const [menuOpen, setOpen] = useState(false)

    function Play(e){
        const allMusic = document.querySelectorAll('.song-lists audio')

        allMusic.forEach((audio) =>{
            if(audio !== e.target){
                audio.pause()
                audio.currentTime = 0;
            }
        })
    }
    return(
        <>
            <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
                <div className="header-part">
                    <span className="logo">
                        <a href="#home" onClick={() => setOpen(false)}>Justin Ross</a>
                    </span>

                    <button
                        className="menu"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={() => setOpen(!menuOpen)}
                    >

                       
                            {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                        
                    </button>
                </div>

                <nav>
                    {links.map((link, index) =>
                    
                    (
                       <a key={link.href} href={`/${link.href}`} onClick={() => setOpen(false)}>
                            <FontAwesomeIcon icon={link.icon} /> {link.label}
                        </a>
                    ))}
                </nav>


                <div className='music'>
                    <h1>Music</h1>
                    <div className="song-lists">
                        <div className="acdc">
                             <div>
                                <h2>ACDC</h2>
                                <span>Highway to Hell</span>
                                <audio controls src="/musics/Highway.mp3" onPlay={Play}></audio>
                             </div>

                             <div>
                                <span>Back in Black</span>
                                <audio controls src="/musics/Back.mp3" onPlay={Play}></audio>
                             </div>

                               <div>
                                <span>Shoot to Thrill</span>
                                <audio controls src="/musics/Shoot.mp3" onPlay={Play}></audio>
                             </div>
                        </div>

                        <div className="taylor">
                             
                        </div>

                        <div className="acdc">
                           
                        </div>
                </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;