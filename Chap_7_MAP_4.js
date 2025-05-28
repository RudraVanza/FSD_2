// Write a React Code To render to render a component to display img using map function
import img1 from './Chap_7_MAP_4.jpg'
import img2 from './Chap_7_MAP_4_1.jpg'
function Chap_7_MAP_4(){
    const img = [img1,img2]
    return(
        <div>
            {img.map((val)=>{
                return <img src = {val} height= '200px' width = '400px'></img>
            })}
        </div>
    )
}
export default Chap_7_MAP_4