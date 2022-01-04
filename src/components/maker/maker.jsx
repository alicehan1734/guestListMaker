import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'
import { useNavigate } from 'react-router-dom';

const Maker = ({authService}) => {

  const navigate = useNavigate();


  const onLogout = () => {
    authService.logout();

  };

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
      <Footer />
    </section>
  );
};

export default Maker;