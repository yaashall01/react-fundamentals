import styles from './App.module.css';
import { useState } from 'react';
import UserMessage from './components/UserMessage/UserMessage';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const userStatus = {
    loggedIn: false, 
    userName: 'John Doe',
  };

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className={styles.container}>
      <h1>User Status</h1>
      <button onClick={toggleMessage} className={styles.button}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>

      {showMessage && (
        <UserMessage loggedIn={userStatus.loggedIn} userName={userStatus.userName} />
      )}
    </div>
  );
}

export default App;
