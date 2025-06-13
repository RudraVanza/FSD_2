import { useState , useEffect} from "react";
function Chap_7_useEffect_2() {
    const [date, setDate] = useState(new Date());
    useEffect(() => { setInterval(() => { setDate(new Date()) }, 1000) } , []);
    return (
        <div>
            <h1>Time Using LocalTimeString - {date.toLocaleTimeString()}<br />Hour = {date.getHours()} , Min = {date.getMinutes()} , Sec = { date.getSeconds()}</h1>
        </div>
    )
}export default Chap_7_useEffect_2