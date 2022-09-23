import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const[mode , setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);  
    } , 1000 );
  }


  const togglemode = () => {
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "warning")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={togglemode}/>

      <Alert alert={alert}/>

      <Textform heading = "Enter text here" mode={mode}/>
        {/* <About /> */}




    </>
  );
}

export default App;
