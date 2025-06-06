import logo from './logo.svg';
import './App.css';
// import Map1 from './Chap_7_MAP_1'
// import Map2 from './Chap_7_MAP_2'
// import Map3 from './Chap_7_MAP_3'
// import Map4 from './Map4'
// import Map5 from './Map5'
// import List1 from './List1'
// import Filter1 from './Chap_7_Filter_1'
// import Filter2 from './Chap_7_Filter_2'
// import Child from './Chap_7_Parent_1_Prop'
// import Car from './Chap_7_Parent_2_Prop'
// import Product from './Chap_7_ProductList'
// import Main from "./Router/Chap_6_Rout_Main"
// import UseState from './Chap_7_UseState_1';
// import UseState2 from './Chap_7_UseState_2';
import UseState4 from "./Chap_7_UseState_4"
import UseState5 from "./Chap_7_UseState_5"
import UseState6 from "./Chap_7_UseState_6"
import UseReducer1 from "./Chap_7_UseReducer_1"
import UseReducer2 from "./Chap_7_UseReducer_2"
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
      {/* <div><Map2></Map2></div>
      <div><Map3></Map3></div>
      <div><Map4></Map4></div>
      <div><Map5></Map5></div>
      <div><List1></List1></div>
      <div><Filter1></Filter1></div>
      <div><Filter2></Filter2></div>
      <div><Child></Child></div>
      <div><Car></Car></div>
      <div><Product></Product></div> */}
      {/* <div><Main /></div> */}
      {/* <UseState /><br></br>
      <UseState2 /> */}
      <UseState4/>
      <UseState5 />
      <UseState6 />
      <UseReducer1/>
      <UseReducer2/>
    </div>
  )
}
export default App;