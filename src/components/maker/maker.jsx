import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({FileInput, authService, cardRepository}) => {

  const historyState = useNavigate.state;

  const [userId, setUserId] = useState(historyState &&  historyState.id);

  const navigate = useNavigate();
  const [cards, setCards] = useState({})


  const onLogout = () => {
    authService.logout();

  };


  const createOrUpdateCard = card => {

    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    })


    cardRepository.saveCard(userId, card);

  }

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    })

    cardRepository.removeCard(userId, card);


  }

  useEffect(() => {

    if(!userId) {
      return
    }

    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    });

    return () => stopSync();

  }, [userId]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if(user) {
        setUserId(user.uid);
      }else{
        navigate("/glm/");

      }
    })
  })

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
      <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
      <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;