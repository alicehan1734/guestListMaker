import React from 'react';
import styles from './card.module.css'

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({card}) => {
  const {name, job, debt ,email,message,theme, fileName, fileURL} = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile"/>
      <div className={styles.info} >
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.job}>{job}</p>
        <p className={styles.debt}>Debt : - ${debt}</p>
        <p className={styles.email}>Email : {email}</p>
        <p className={styles.message}>Message : {message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    case 'beige':
        return styles.beige;
    default:
      throw new Error(`unknown theme: ${theme}`)
    
  }
}


export default Card;