// Aim :- Creat react tab which contains the form with the folloing filds 1> FirstName 2> Email 3> Password 4> confirmpassword 5> message 6> textarea,7> gender,8> city . Display submited value in alertbox using useState hook
import { useState } from "react";
import './Chap_7_useEffect_Form1.css'
function Chap_7_useEffect_Form1() {
    const [formdata, setformdata] = useState(0);
    function hendelchange(e) {
        const { name, value } = e.target;
        setformdata({...formdata,[name]:value})
    }
    function handelsubmit(e) {
        e.preventDefault();
        alert(`Your Form Has Been Submited.\nName : "${ formdata.fname }\nEmail : ${formdata.eid}\nCity : ${formdata.city}\nGender : ${formdata.gender}`)
    }
    function checkPassword(e) {
        if (formdata.pass == formdata.Cpass) {
            alert(`Email Id = ${formdata.eid}\nPassword = ${formdata.pass}`)
        }
    }
    return (
        <div>
            <form onSubmit={handelsubmit}   >
                <label>FirstName : </label><input type="text" name="fname" onChange={hendelchange}/><br/>
                <label>Email : </label><input type="email" name="eid" onChange={hendelchange}/><br/>
                <label>Password : </label><input type="password" name="pass" onChange={hendelchange}required/><br/>
                <label>Confirm Password : </label><input type="password" name="cpass" onChange={hendelchange}required/><br/>
                <label>Messages : </label><textarea type="password" name="msg" onChange={hendelchange} required /><br />
                <select onChange={hendelchange} name='city'>
                    <option value="">select</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Rajkot">Rajkot</option>
                </select><br/>
                <input type='radio' name="gender" value="male" onChange={hendelchange}/>Male<br/>
                <input type='radio' name="gender" value="female" onChange={hendelchange}/>Female<br/>
                <button type="submit">Submit</button>       
            </form>
        </div>
    )
}export default Chap_7_useEffect_Form1