
function List1() {
    const students = [{ id: 1, name:"ABC" }, { id: 2, name :"PQR" }]
    return (
        <div>
            <ul>
                {students.map((val) =>
                { return <li key={val.id}>{val.name}</li>})}
            </ul>
        </div>
    )
}
export default List1