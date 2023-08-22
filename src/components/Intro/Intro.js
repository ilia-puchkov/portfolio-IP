import introPhoto from '../../images/avatar.jpg';
import introBack from '../../images/intro-back.svg';

function Intro() {
  return (
    <div className='intro' id='intro'>
      <img className='intro__background' src={introBack}></img>
      <div className='intro__information'>
        <div className='intro__information-block'>
          <h1 className='intro__title'>Front-end разработчик</h1>
          <h2 className='intro__name'>Илья</h2>
          <p className='intro__description'>
            Я родился в Тамбове, живу в Москве, закончил факультет английской
            филологии ТГУ. Люблю кино и пешие прогулки. Работаю в сфере
            обслуживания аэропортов. В 2022-2023 прошел курсы Яндекс.Практикум
            по фронт-енд разработке. Мечтаю стать членом команды, которая
            изменит мир.
          </p>
          <div className='intro__links'>
            <a
              href='mailto:reras.suburbia@gmail.com'
              className='intro__links-button'
            >
              Написать
            </a>
            <a className='intro__links-logo' href='https://t.me/reras_suburbia' target='_blank'></a>
            <a className='intro__links-logo git-logo' href='https://github.com/ilia-puchkov' target='_blank'></a>
          </div>
        </div>
        <img className='intro__photo' src={introPhoto} />
      </div>
    </div>
  );
}

export default Intro;
