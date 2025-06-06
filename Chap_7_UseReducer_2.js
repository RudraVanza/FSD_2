import { useReducer } from "react";
function reducer(state , action) {
    return state + action
}
function Chap_7_UseReducer_2() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(5)}>Add 5</button>
        </div>
    )
}
export default Chap_7_UseReducer_2