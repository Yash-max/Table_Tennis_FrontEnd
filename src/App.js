import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login.';
import Signup from './components/Signup';
import Splash from './components/Splash';

function App() {
  const [splash,setSplash] = useState(true);
  const [login,setLogin] = useState(false);
  const [signup,setSignup] = useState(false);

  const callback = (payload) => {
    console.log(payload);
    if(payload == 'splash') {
      setSplash(true);
      setLogin(false);
      setSignup(false);
    } else if(payload == 'login') {
      setSplash(false);
      setLogin(true);
      setSignup(false);
    } else if(payload == 'signup') {
      setSplash(false);
      setLogin(false);
      setSignup(true);
    } else {
      // To Be Handled
    }
  }

  return (
    <div className="App" style={{maxWidth: "375px", margin: 'auto'}}>
      {
        splash && <Splash callback={callback} login={login}/>
      }
      {
        signup && <Signup callback={callback} />
      }
      {
        login && <Login callback={callback} />
      }
    </div>
  );
}

export default App;