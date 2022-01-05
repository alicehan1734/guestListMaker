import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout}) => {
  return (
    <header className={styles.header}>

      {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
      
      <img className={styles.logo} src="./images/invitaion.png" alt="logo"/>
      <h5 className={styles.title} >Gganbu, Let's make a list of people you want to invite to your game. 👽</h5>
    </header>
  );
};

export default Header;