import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {

  const navigate = useNavigate();
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ])

  const onLogout = () => {
    authService.logout();

  };

  const addCard = card => {
    console.log(card)
    const updated = [...cards, card];
    setCards(updated);
    
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
      <Editor cards={cards} addCard={addCard}/>
      <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;