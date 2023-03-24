import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MessageSection from './Components/MessageSection/MessageSection';
import InputContainer from './Components/InputContainer/InputContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MessageSection />
      {/* <InputContainer /> */}
    </div>
  );
}

export default App;
