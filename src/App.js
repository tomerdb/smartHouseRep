import React,{useState} from 'react';
import './App.css';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './components/HomePage.js';
import AddRoom from './components/AddRoom.js';
import Room from './components/Room';
function App() {
  const [Flag, setFlag] = useState(false)
  const [Rooms, setRooms] = useState([])
  const AddRoom1 = (n,c,t,p)=>{
    setRooms([...Rooms,{Name:n,Color:c,Type:t,Path:p,buttons:{}}])
  }
  const AddProduct = (select,name,color) =>{
    setProducts([...Products,{name,select,color}])
  }
  const [Products, setProducts] = useState([])
  
  const ChangeColor = (index)=>{
    var temp = [...Products]
    if(temp[index].color=='red'){
      temp[index].color='green'
      setProducts(temp)
    }
    else{
      temp[index].color='red'
      setProducts(temp)
    }
  }
  return (
    <div className="App">
          <h1 id='title'>Smart House</h1>
      <Router>


        <Switch>
          <Route exact path='/' component={()=>{return <HomePage rooms={Rooms}/>}}/>
          <Route exact path='/addroom' component={()=>{return <AddRoom add={AddRoom1}/>}}/>
          {Rooms.map((e)=>{
            return <Route exact path={`/room${e.Name}`} component={()=>{return <Room color={ChangeColor} flag={Flag} Changeflag={()=>{setFlag(!Flag)}} name={e.Name} type={e.Type} product={AddProduct} product2={Products}/>}}/>
          })}
        </Switch>


      </Router>

    </div>
  );
}

export default App;
