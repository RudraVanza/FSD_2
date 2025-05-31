// Write Js script to displat vcalues in consol while changing in taxtbox 
function Chap_7_Event_2() {
    function handleChange(e) {
        console.log(e.target.value);
    }
    return(
        <input type='text' name = 'Firstname' onChange = {handleChange}></input>
    )
}
export default Chap_7_Event_2 