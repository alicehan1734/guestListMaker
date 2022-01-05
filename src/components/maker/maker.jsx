import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({FileInput, authService}) => {

  const navigate = useNavigate();
  const [cards, setCards] = useState({
    '1' : {
      id: '1',
      name: 'HeeYeon Han',
      company: 'Samsung',
      message:'sdf',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'go for it',
      fileName: 'alice',
      fileURL:null
    },
    '2': {
      id: '2',
      name: 'HeeYeon Han',
      company: 'Samsung',
      message:'sdf',
      theme: 'light',
      title: 'Software Engineer',
      email: 'go for it',
      fileName: 'alice',
      fileURL:null
    },   
    '3': {
      id: '3',
      name: 'HeeYeon Han',
      company: 'Samsung',
      message:'sdf',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'go for it',
      fileName: 'alice',
      fileURL:null
    },
  })


  const onLogout = () => {
    authService.logout();

  };


  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    })
  }

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    })

  }

  useEffect(()=>{
    authService.onAuthChange(user => {
      if(!user) {
        navigate("/");
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