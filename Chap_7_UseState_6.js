import { use, useState } from "react";
import img1 from "./Chap_6_MAP4_image1.jpg"
import img2 from "./Chap_6_MAP4_image2.jpg"
import img3 from "./Lolipop.jpg"
import img4 from "./Lolipop1.jpg"
import img5 from "./Chap_6_Ex2.jpg"
function Chap_7_UseState_6() {
    const arr = [img1, img2, img3, img4, img5];
    const [myImage, setImage] = useState(arr[0]);
    function changeImage() {
        const randomIndex = Math.floor(Math.random() * arr.length);
        setImage(arr[randomIndex])
    }
    return (
        <div>
            <h1>Random Image</h1>
            <button onClick={changeImage}>Change Image</button><br></br><br></br>
            <img src={myImage} height="200px" width="200px"></img>
            <h2>==========================================================================================================================</h2>
        </div>
    )
}
export default Chap_7_UseState_6