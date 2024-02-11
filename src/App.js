//this is my first project while learning React Js
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light')//change mode light or dark
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
          setAlert({
            msg: message,
            type: type
          })
          setTimeout(()=>{
             setAlert(null);
          },1500)
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='#14103e';
      document.body.style.color ='white';
      showAlert(" Dark mode has been Enabled", "success");
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
      document.body.style.color ='white';
      showAlert(" Light mode has been Enabled", "success");
    }
  }
  return (
    <>
<Navbar title = "Textutils" About = "About Textutils" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<Alert alert={alert}/>
<Textform showAlert={showAlert} heading = "Enter the text to analyze the sentence" mode={mode} toggleMode={toggleMode}/>
  </>
  );
}
export default App;
