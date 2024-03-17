export default function Fruit ({fruits}){

    const displayFruit = ()=> fruits.map(fruit => <li>{fruit}</li>)
return <>
<h1>fruits:</h1>
<ul>
{displayFruit()}
</ul>
</>
}