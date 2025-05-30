// Write React Component to Skip digit 3 from an array and display all the mremaining digit of the array
function Chap_7_Filter_1() {
    let arr = [1,2,3,1,4,5,6,3,1,5,1,8,12,3,5,8,56,8,5,123,6]
    const newArr = arr.filter(num => num !==3 )
    return (
        <div>
            <h1>Array Element Before Filter : <span style={{ color: "red" }}>{arr.join(",")}</span></h1>
            <br></br><br></br>
            <h1>Array Element After Filter : <span style={{ color: "red" }}>{newArr.join(",")}</span></h1>
        </div>
    )
}
export default Chap_7_Filter_1