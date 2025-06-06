import {useState} from 'react'
function Chap_7_UseState_4() {
    const [name, setName] = useState("LJ")
    const [textColor, setColor] = useState("Red")
    const [hideText, setHide] = useState("React")
    const [buttontext, setButtontext] = useState("Hide")
    function showhide() {
        if (buttontext === "Hide") {
            setButtontext("show");
            setHide(" ");
        } else {
            setButtontext("Hide");
            setHide("React");
        }
    }
    function changeName() {
        if (name === "LJ") {
            setName("Student");
        } else {
            setName("LJ");
        }
    }
    function changeColor() {
        if (textColor === "Red") {
            setColor("blue");
        } else {
            setColor("red")
        }
    }
    return (
        <div>
            <button onClick={changeName} style={{margin: "5px"}}>Change Text</button>
            <button onDoubleClick={changeColor} style={{margin: "5px"}}>Change Color</button>
            <button onClick={showhide} style={{margin: "5px"}}>{buttontext }</button><br></br><br></br>
            <h1 style={{ color: textColor }}>{name}</h1>
            <h2 >{hideText}</h2><br /><br />
            <h2>==========================================================================================================================</h2>
        </div>
    )
}
export default Chap_7_UseState_4