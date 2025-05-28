// We have an array of numbers and we want to multiply each of this numbers by 5 Write a react code to render a component to display this multiply number using map function

function Chap_7_MAPˍ3() {
    const arr = [1,2,3,4,5]
    return (
        <div>
            <h1>Mapping</h1>
            {arr.map((value) => {
                return <h2>Multiplied Elements {value} * 5 :- {value*5}</h2>
            })}
        </div>
    )
}
export default Chap_7_MAPˍ3