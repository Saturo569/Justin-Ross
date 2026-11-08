import hand from '../assets/hand.png';


const infos = [
    {value: 'BSIT', label: 'COURSE'},
    {value: '2nd Year', label: 'LEVEL'},
    {value: 'CvSU', label: 'SCHOOL'}
]
function About(){
    return(
        <>
            <section className="about" id="about">
                <div className="about-me">
                    <div className="about-top">
                        <img src={hand} alt="Kamay ni Ironman" className="picture"/>

                        <div className="about-text">
                            <h1>Justin Ross Estacio</h1>
                            <p>I'm a 2nd year Information Technology student. I'm always curious about cool things in technology.</p>
                            <p>Right now, my skills aren't that great yet, but I'm willing to learn, especially when it comes to web development and game development.</p>
                            <br />
                            <p>My focus tech stack right now: 
                            <br /><span style={{color: 'orange'}}><i class="fa-brands fa-html5"></i></span> html,<span style={{color: 'blue'}}><i class="fa-brands fa-css3-alt"></i></span> css, and <span style={{color: 'yellow'}}><i class="fa-brands fa-js"></i></span> javascript for  <span style={{fontSize: '16px', backgroundColor: 'gray', color: 'black', padding: '4px', borderRadius: '24px'}}><i class="fa-solid fa-desktop"></i></span> web development.</p>
                            <p>C# for game development.</p>
                            
                        </div>
                    </div>

                    <div className="short-info">
                        {infos.map((info) =>(
                            <div className="info" key={info.label}>
                                <strong>{info.value}</strong>
                                <span>{info.label}</span>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default About;