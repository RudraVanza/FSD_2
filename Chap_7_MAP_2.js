// write a react code to render having a array of strings and convrt it in upper case using map method
function Chap_7_MAPˍ2() {
    const arr = ['a','b','c','d']
    return (
        <div>
            <h1>Mapping</h1>
            {arr.map((value) => {
                return <h2>Array Elements :- {value.toUpperCase()}</h2>
            })}
        </div>
    )
}
export default Chap_7_MAPˍ2