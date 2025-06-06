import { useReducer } from "react";
// Syntax ===>  const [state , dispatch]  = useReducer(reducerFunction , initialValue);
const initialvalue = 0
const initialValue = 100
function incres(state , action) {
    if (action.type === "increment") {
        return state + 1;
    }
}
function dec(state, action) {
    if (action.type === "dec") {
        return state - 1;
    }
}
function Chap_7_UseReducer_1() {
    const [state, dispatch] = useReducer(incres, initialvalue)
    const [state1, dispatch1] = useReducer(dec, initialValue)
    return (
        <div>
            <h2>Increment Value</h2>
            <button onClick={() => dispatch({ type: "increment" })}>Click Me {state}</button>
            <h2>==========================================================================================================================</h2>
            <h2>Decrement Value</h2>
            <button onClick={() => dispatch1({ type: "dec" })}>Click Me {state1}</button>
            <h2>==========================================================================================================================</h2>
        </div>
    )
}export default Chap_7_UseReducer_1
