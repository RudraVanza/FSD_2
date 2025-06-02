import { use, useState } from "react";
function Chap_7_UseState_3() {
    const [name, setName] = useState("LJ University");
    const [textcolor, setColor] = useState("red");
    const [hidetext, setHide] = useState("React JS Hooks");
    const [buttontext, setButtontext] = useState("Hide");
    function Showhide() {
        if (buttontext = "Hide") {
            setButtontext("Show");
            setHide("");
        } else {
            setButtontext("Hide");
            setHide("React JS Hooks");
        }
    }

    function changeName() {
        if (name = "LJ University") {
            setName("Welcome Student!!!");
        } else {
            setName("LJ University")
        }
    }

    function changeColor() {
        if (textcolor = "red") {
            setColor("blue");
        } else {
            setColor("red")
        }
    }
    return (
        <div>
            
        </div>
    )
}