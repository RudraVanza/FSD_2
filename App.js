import logo from './logo.svg';
import './App.css';
// import Map1 from './Chap_7_MAP_1'
import Map2 from './Chap_7_MAP_2'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <div><Map1 className='map'></Map1></div> */}
      <div><Map2 className = 'map'></Map2></div>
    </div>
  );
}

export default App;
