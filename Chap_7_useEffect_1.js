import { useState , useEffect} from "react";
function Chap_7_useEffect_1() {
    const [count, setCount] = useState(0)
    const [calculation, setCal] = useState(0)
    useEffect(()=>{alert("Rendered 1st Time & Whenever Button A is Clicked")},[count])
    useEffect(() => { alert("Only Once when Component is Mounted") },[])
    useEffect(() => { alert("Runes on every Render ") })
    const changeCount = ()=>{setCount(count+1)}
    const changeCalc = () => { setCal(calculation + 1) }
    return (
        <div>
            <button onClick={changeCount}>Button A {count}</button>
            <button onClick={changeCalc}>Button B {calculation}</button>
        </div>
    )
}export default Chap_7_useEffect_1
