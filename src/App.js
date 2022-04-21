import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/form';
import Button from  'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import myWonderfulImage from "./images/rozen.jpg"
function App() {
  return (
    <div className="App">
  <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="titlered">Samah</h1>

<br/> 

<img src="/nature.jpg" alt="nature" />

<br/>
   <img src={myWonderfulImage} alt ='rozen' />
   
</div>

<video width="320" height="240" controls>

<source src="BabyCats.mp4" type="video/mp4"/>

</video>
 
    </div>
  );
}

export default App;
