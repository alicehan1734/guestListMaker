import React, { useEffect } from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom';

const Login = ({authService}) => {

  const navigate = useNavigate();

  const goToMaker = userId => {

    navigate("/maker", { id : userId})
  };

  const onLogin = event => {
    console.log(event.currentTarget.textContent);
    
    authService
    .login(event.currentTarget.textContent)
    .then(data => goToMaker(data.user.uid))
  }

  useEffect(()=>{
    authService
    .onAuthChange(user => {
      user && goToMaker(user.id);
      
    })
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul  className={styles.list}>
          <li  className={styles.item}>
            <button  className={styles.button} onClick={onLogin}>Google</button>
          </li>

          <li  className={styles.item}>
            <button  className={styles.button} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;