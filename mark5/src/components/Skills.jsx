

function Skills(){
    return(
        <>
        <section className="skills" id="skills">
      <h1>Skills</h1>

      <div className="skills-ni-ross">

        <div className="skill-group">
          <h3><i class="fa-solid fa-desktop"></i> Web development</h3>
          <div className="skill-list">
            <span className="skill-chip"><i class="fa-brands fa-html5"></i> HTML</span>
            <span className="skill-chip"><i class="fa-brands fa-css3-alt"></i> CSS</span>
            <span className="skill-chip"><i class="fa-brands fa-js"></i> JavaScript</span>
          </div>
        </div>

        <div className="skill-group">
          <h3><i class="fa-solid fa-gamepad"></i> Game development</h3>
          <div className="skill-list">
            <span className="skill-chip">C#</span>
            <span className="skill-chip">Canva (for basic ui)</span>
          </div>
        </div>

        <div className="skill-group">
          <h3>Soft skills</h3>
          <div className="skill-list">
            <span className="skill-chip">Willingness to learn</span>
            <span className="skill-chip">Adaptability</span>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
export default Skills;