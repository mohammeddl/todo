export default function Events({button}){

    const handelClick = ()=>{
        alert('yeeess !!!!!!!!!')
    }

    

    return <div>
        <button onClick={handelClick}>
            {button}
        </button>
    </div>
}