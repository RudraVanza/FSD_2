//Write a react code to render components to display images using map function
import img1 from "./Chap_7_MAP4_image1.jpg"
import img2 from "./Chap_7_MAP4_image2.jpg"
function Chap_7_MAPˍ4() {
    const images = [img1,img2]
    return (
        <div>
            {images.map((val) => {
                return < img src = { val } height = "200px" width = "200px" alt = "logo" />
            })}
        </div>
    )
}
export default Chap_7_MAPˍ4