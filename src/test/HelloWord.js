export default function HelloWord({lastName}){
    console.log(lastName)
    const age = 18
    return (<div> hello  {lastName} {age < 18 ? 'old' : 'jonir '} </div>)
}