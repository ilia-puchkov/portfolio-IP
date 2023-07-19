function GoUp() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="goup">
      <button onClick={scrollToTop} className="goup__button"></button>
      <p className="goup__text">наверх</p>
    </section>
  )
}

export default GoUp;