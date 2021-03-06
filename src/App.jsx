import styles from './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

import {Routes , Route } from 'react-router-dom'
function App({authService, FileInput, cardRepository}) {
    
  return (
    <div className={styles.app}>
      
      <Routes>
        <Route exact={true} path="/glm" element={<Login authService={authService}/>}/>
        <Route path="/glm/maker"  element={<Maker cardRepository={cardRepository} FileInput={FileInput} authService={authService}/> }/>
      </Routes>
      
    </div>
 );
}

export default App;
