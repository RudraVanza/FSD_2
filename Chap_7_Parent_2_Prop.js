import Prop from './Chap_7_Child_2_Prop.js'
function Chap_7_Parent_2_Prop() {
    const carInfo = { brand: "Kia", name: "Sonet" }
    return (
        <div>
            <h1>Car Detail :- </h1>
            <Prop car={carInfo}></Prop>
        </div>

    )
}
export default Chap_7_Parent_2_Prop
