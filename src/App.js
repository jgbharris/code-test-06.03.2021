
import './App.css';
import Clock from './Clock.js'


function App() {

  return (

    <div className="App">
      <div className="Clock"> <Clock time={new Date()}  timeZone={-5} heading="New York"/></div>
      <div className="Clock"> <Clock time={new Date()}  timeZone={0} heading="London"/></div>
      <div className="Clock"> <Clock time={new Date()}  timeZone={+3} heading="Moscow"/></div>
    </div>
  );
}

export default App;
