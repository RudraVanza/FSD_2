// Create the file name "Ex1.js" as a component and import this component in "App.js" file 
import './App.css';
import react from "react";
function Ex1(){
    return(
        <div>
            <h1 >Example :- 1</h1>
            <ol className = "Ol">
                <li>Rudra</li>
                <li>Rahul</li>
            </ol>
        </div>
    )
}
export default Ex1