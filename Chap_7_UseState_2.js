// Create programm app having buttond to inc and dec number by clicking on by buttton also increment of the number should be perform if num is < 10 & dec of the number should perform if num > 0    
import { useState } from "react";
function Chap_7_UseState_2() {
    const [num, setnum] = useState(0);
    function increment() {
        if (num < 10) {
            setnum(num + 1);
        } else {
            return false;
        }
    }
    function decrement() {
        if (num >  0) {
            setnum(num - 1);
        } else {
            return false;
        }
    }
    return (
        <div>
            <h1>Increment - Decrement </h1>
            <button onClick={increment}>Click For Increment </button>
            <br></br>
            <button onClick={decrement}>Click For Decrement </button>
            <br></br>
            <h1>{num}</h1>
        </div>
    )
}
export default Chap_7_UseState_2