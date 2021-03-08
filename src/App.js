
import './App.css';
import Clock from './Clock.js'


function App() {

  return (

    <div className="App">
      <div className="Clock"> <Clock time={new Date()}  timeZone={-3}/></div>
      <div className="Clock"> <Clock time={new Date()}  timeZone={0}/></div>
      <div className="Clock"> <Clock time={new Date()}  timeZone={+3}/></div>
    </div>
  );
}

export default App;
