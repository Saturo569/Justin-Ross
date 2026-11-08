import hand from '../assets/hand.png';

function Home(){
    return(
        <>
        <section className="home" id="home">
       <div className="intro">
            <h1 className="justin">Justin Ross</h1>
       </div>
    
       <div className="frame">
        <img src={hand} alt="hand.png"/>
       </div>
    </section>
        </>
    );
}

export default Home;