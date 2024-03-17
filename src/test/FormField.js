
export default function FormField(props){

    return (    
    <>

    <label>{props.labelName}</label>
    <input type='text' name={props.user}></input>
    <div>{props.children}</div>

    </>)
}