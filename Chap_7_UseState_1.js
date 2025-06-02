// Write a Progremm to build react app having button which incres the count by one by clicking on it
import { useState } from "react";
function Chap_7_UseState_1() {
    
        const [count, setCount] = useState(0);
        function handleCount() {
            setCount(count + 1);
        }
        return (
            <div>
                <p>You Clicked {count} Times</p>
                <button onClick={handleCount}>Click Me!!!</button>
            </div>
        )
}
export default Chap_7_UseState_1