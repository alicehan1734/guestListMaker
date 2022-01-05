import React from 'react';
import Button from '../button/button';

import styles from './card_edit_form.module.css'

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
  const {name, company, title ,email,message,theme, fileName, fileURL} = card;


  const onSubmit = () => {
    deleteCard(card);

  }

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL : file.url
    })
  }

  const onChange = (event) => {

    if(event.currentTarget == null) {
      return;
    }

    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name] : event.currentTarget.value,
    })
  }
  return (
    <form className={styles.form}>
      <input onChange={onChange} className={styles.input} type="text" name="name" value={name}/>
      <input  onChange={onChange} className={styles.input} type="text" name="company" value={company}/>
      <select  onChange={onChange} className={styles.select} name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>

      <input  onChange={onChange} className={styles.input} type="text" name="title" value={title}/>
      <input  onChange={onChange} className={styles.input} type="text" name="email" value={email}/>
      <textarea  onChange={onChange} className={styles.textarea} name="message" value={message}/>
      <div className={styles.fileInput} >
      <FileInput name={fileName} onFileChange={onFileChange}/>
      </div>
      <Button name='Delete' onClick={onSubmit}/>
    </form>
  );
};

export default CardEditForm;