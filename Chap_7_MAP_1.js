// Aim :- Write React Code to render a component to display all the array element in h2 tag using map function
function Chap_7_MAPˍ1() {
    const arr = [1,2,3,4,5]
    return (
        <div>
            <h1>Mapping</h1>
            {arr.map((value) => {
                return <h2>Array Elements :- {value}</h2>
            })}
        </div>
    )
}
export default Chap_7_MAPˍ1