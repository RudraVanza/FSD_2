// Write a react code to render a component with display arry elements which are > 3
function Chap_7_MAP_5(){
    const arr = [5,8,9,6,1,2,1,0,7,2,4] 
    return(
        <div>
            <h1>Elements &gt; 3 :- </h1>
            {
                arr.map((val)=>{
                    if (val > 3) {
                        return (<h2>Array Elements = {val}</h2>)
                    }
                })
            }
        </div>
    )
}
export default Chap_7_MAP_5