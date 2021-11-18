import { FaGithub } from 'react-icons/fa';
import {FiX} from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const userLogged = true;

  return userLogged ? (
    <button 
      className={styles.signInButton} 
      type="button"
    >    
      <FaGithub color="#04d361"/>
      hbenvenutti
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  )

  : (
    <button
      type='button'
      className={styles.signInButton}
    >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>
  )
}
