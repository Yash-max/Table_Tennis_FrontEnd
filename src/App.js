import './App.css';
import Login from './components/Login.';
import Signup from './components/Signup';
import Splash from './components/Splash';

function App() {
  return (
    <div className="App" style={{maxWidth: "375px", margin: 'auto'}}>
      {/* <Splash/> */}
      {/* <Signup/> */}
      <Login/>
    </div>
  );
}

export default App;