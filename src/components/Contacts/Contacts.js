import contactsBack from '../../images/本.svg'

function Contacts() {
  return (
    <section className='contacts' id='contacts'>
      <img className='contacts__background' src={contactsBack}></img>
      <h2 className='contacts__title'>Контакты</h2>
      <div className='contacts__block'>
        <ul className='contacts__list'>
          {/*<li className='contacts__element'>
            <a href='#' className='contacts__element' target='_blank'>LinkedIn</a>
            </li>*/}
          <li className='contacts__element'>
            <a href='https://discord.com/users/441998629562089474/' className='contacts__element' target='_blank'>
              Discord
            </a>
          </li>
          <li className='contacts__element'>
            <a href='https://github.com/ilia-puchkov' className='contacts__element' target='_blank'>
              Github
            </a>
          </li>
        </ul>
        <p className='contacts__email'>reras.suburbia@gmail.com</p>
      </div>
    </section>
  );
}

export default Contacts;
