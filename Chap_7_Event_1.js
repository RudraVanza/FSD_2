// On Click Event : Write a React js script to display allert box with text welcome to India by clicking on button
function Chap_7_Event_1() {
    function demoFunction(){
        alert("Welcome To India")
    }
    return(
        <div>
            <button onClick={demoFunction}>Cleck Here!!!!</button>
        </div>
    )
}
export default Chap_7_Event_1