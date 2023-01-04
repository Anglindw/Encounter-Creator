import { useState, useEffect, Component } from 'react';
import SelectBox from './components/SelectBox/SelectBox';
import RandomMonster from './components/RandomMonster/RandomMonster';
import Home from './routes/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

// const App = () => {
//   console.log("Render");

//   const [ number, setNum] = useState('0');
//   const [monsters, setMonster] = useState([]);
//   const [filtermonster, setFilterMonster] = useState(monsters)

//   useEffect(() => {
//     const fetchMonsters = async () => {
//       const response = await fetch (
//         "https://www.dnd5eapi.co/api/monsters"
//       );
//       const data = await response.json();
//       setMonster(data['results'])
//     };
//     fetchMonsters()
//   }, [])
//   useEffect(() => {
//     const setFilterMonster = monsters.filter.apply((mons) => {
//       return mons.name.includes('number');
//     })
//     setFilterMonster(filtermonsterEffect)
//   }, [monsters, number])
//   const 
// }

class App extends Component{
  constructor(){
    super()
    this.state ={
      'monsters': []
    }
  }
async componentDidMount() {
  const response = await fetch('https://www.dnd5eapi.co/api/monsters')
  const data = await response.json()
  this.setState(
    () => {
      return ({'monsters': data['results']})
      
    },
    console.log(this.state.monsters)
  )
}
  render(){
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  
    
  );
  }
}

export default App;
