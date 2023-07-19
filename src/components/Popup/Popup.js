function Popup(props) {
  return (
    <div
      className={`popup popup_type_card ${props.isOpen ? 'popup_opened' : ''}`}
    >
      <div className='popup__container'>
        <ul className='popup__container-list'>
          <li className='popup__list-text'>Тел.: 555-555-555</li>
          <li className='popup__list-text'>Email: test@test.ru</li>
        </ul>
        <button
          className='buttons popup__close-button'
          type='button'
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default Popup;