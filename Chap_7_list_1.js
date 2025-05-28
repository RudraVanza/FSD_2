function Chap_7_list_1(){
    const list = [{id : 1 , Name : "Rudra"},{id : 2 , Name : "Rahul"},{id : 3 , Name : "Ketan"}] 
    return(
        <div>
            <ul>
                {list.map((val)=>{
                    return<li key={val.id}>{val.Name}</li>
                })}
            </ul>
        </div>
    )
}
export default Chap_7_list_1