// Create a React code To render a component with the following data 
// 1> A heading in italic blue color and font size 25px blue color 
// 2> An image 
// 3> An oder list of three fruits that starts with latter "A" 
// 4> the current Date & Time 
import Dhoni from './Ex2.jpg'
function Chap_7_Ex2(){
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString(); 
    return(
        <div>
            <h1 style = {{color : "blue" , fontStyle : 'italic' , fontSize : '25px'}}>Example 2 :- </h1>
            <br></br>
            <img src={Dhoni} alt='Dhoni'></img>
            <br></br>
            <ol>
                <li>Apple</li>
                <li>Banana</li>
                <li>Cherry</li>
            </ol>
            <br></br>
            <h6>Current Date : {date}</h6>
            <h6>Current Time : {time}</h6>
        </div>
    )
}
export default Ex2