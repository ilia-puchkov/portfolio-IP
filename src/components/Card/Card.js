function Card(props) {
  return (
    <div className='card'>
      <div className='card__header'>
        <p className='card__header-type'>{props.card.type}</p>
        <a className='card__header-link' href={props.card.link} target='_blank'></a>
      </div>
      <div className='card__info'>
        <h2 className='card__title'>{props.card.header}</h2>
        <p className='card__text'>{props.card.text}</p>
      </div>
      <ul className='card__list'>
        <li className='card__list-text'>{props.card.tech1}</li>
        <li className='card__list-text'>{props.card.tech2}</li>
        <li className='card__list-text'>{props.card.tech3}</li>
      </ul>
    </div>
  );
}

export default Card;
