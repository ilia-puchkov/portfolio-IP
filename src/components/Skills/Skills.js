import skillsBack from '../../images/保.svg'

function Skills() {
  return(
    <section className="skills">
      <img className='skills__background' src={skillsBack}></img>
      <div className="skills__block">
        <h2 className="skills__title">Технологии</h2>
        <ul className="skills__list">
          <li className="skills__element">Frontend</li>
          <li className="skills__element">HTML</li>
          <li className="skills__element">CCS</li>
          <li className="skills__element">JavaScript</li>
          <li className="skills__element">React</li>
        </ul>
      </div>
      <div className="skills__block">
      <h2 className="skills__title">Языки</h2>
      <ul className="skills__list">
          <li className="skills__element">русский - родной</li>
          <li className="skills__element">английский - свободный</li>
          <li className="skills__element">французский - начальный</li>
        </ul>
      </div>
    </section>
  )
}

export default Skills;