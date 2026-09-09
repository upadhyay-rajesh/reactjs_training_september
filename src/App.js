import logo from './logo.svg';
import './App.css';
import SignUPComponent from './components/signup';
import SignInComponent from './components/signin';

function App() {
  return (
    <div className="App">
      Hello Welcome to reactjs!  <br></br>
      {2+3} <br></br>

      <SignUPComponent />

      <SignInComponent />
    </div>
  );
}

export default App;
