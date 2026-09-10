import logo from './logo.svg';
import './App.css';
import RegisterComponent from './components/register';
import Register2 from './components/register2';
import StateHookComponent from './components/statehook';
import StateHookAdvanceComponent from './components/statehookadvance';


function App1() {
  return (
    <div className="App">
      <StateHookComponent />
      <StateHookAdvanceComponent />

      <Register2 />

    </div>
  );
}

export default App1;
