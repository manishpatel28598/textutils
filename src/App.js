//this is my first project while learning React Js
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';

function App() {
  return (
    <>
<Navbar title = "Textutils" About = "About Textutils"/>
{/* <Navbar/> */}
<Textform heading = "Enter the test to analyze yourself "/>
  </>
  );
}
export default App;
