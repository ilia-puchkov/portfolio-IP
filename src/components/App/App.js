import { useState } from 'react';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';

import cards from '../../utils/cardInfo';


function App() {
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  function handleContactsOpen() {
    setIsContactsOpen(true);
  };

  function handleClose() {
    setIsContactsOpen(false);
  }

  return (
    <div className="page">
      <Header onOpen={handleContactsOpen} />
      <Main cards={cards} />
      <Footer onOpen={handleContactsOpen} />
      <Popup isOpen={isContactsOpen} onClose={handleClose} />
    </div>
  );
}

export default App;
