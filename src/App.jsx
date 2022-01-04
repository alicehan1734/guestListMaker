import styles from './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

import {Routes , Route } from 'react-router-dom'
function App({authService}) {
  return (
    <div className={styles.app}>

      <Routes>
        <Route exact={true} path="/" element={<Login authService={authService}/>}/>
        <Route path="/maker"  element={<Maker authService={authService}/> }/>
      </Routes>
      
    </div>
 );
}

export default App;
