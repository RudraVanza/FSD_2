// Give the given array we have to print prime numbers
function Chap_7_Filter_2() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <div>
            
            {arr.filter((value) => value < 6).map((value) => { return <h1>Array Value : {value}</h1> })}
        </div>        
    )
}
export default Chap_7_Filter_2 