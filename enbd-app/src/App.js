import { Component } from 'react';
import SelectBox from './components/SelectBox/SelectBox';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state ={
      'monsters': []
    }
  }
async componentDidMount() {
  const response = await fetch('https://www.dnd5eapi.co/api/monsters')
  const data = await response.json
  this.setState(
    () => {
      return ({'monsters': data['results']})
    }
  )
}
  render(){
  return (
    <div className="App">
      <header className='App-header'>
      <SelectBox/>

      </header>
    </div>
  );
  }
}

export default App;
