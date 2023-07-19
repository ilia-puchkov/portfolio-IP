function Header() {
  return (
    <header className='header'>
      <ul className="header__links">
      <li><a href='#intro' className="header__link">Обо мне</a></li>
      <li><a href='#projects' className="header__link">Проекты</a></li>
      <li><a href='#contacts' className="header__link">Контакты</a></li>
      </ul>
      <div className="header__languages">
        {/*<p className="header__language">RU</p>
        <p className="header__language"> / </p>
        <p className="header__language">EN</p>*/}
      </div>
    </header>
  );
}

export default Header;
