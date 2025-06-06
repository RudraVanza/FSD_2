import { useState } from "react";
import img1 from "./Chap_6_MAP4_image1.jpg"
import img2 from "./Chap_6_MAP4_image2.jpg"
function Chap_7_UseState_5() {
    const [myImage, setImage] = useState(img1);
    function changeImage() {
        if (myImage === img1) {
            setImage(img2)
        } else {
            setImage(img1)
        }
    }
    return (
        <div>
            <button onClick={changeImage}>Change Image</button><br></br><br></br>
            <img src={myImage} height="200px" width="200px" alt="Logo" />
            <h2>==========================================================================================================================</h2>
        </div>
    )
}
export default Chap_7_UseState_5