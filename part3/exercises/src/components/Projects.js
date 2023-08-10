import data from './../data.json';
import { useState } from 'react';

export default function  MyProjects()
{

const [index, setIndex] = useState(0);



const handleClick = (event) => {
   // alert(data.length);
   // alert(data[index].canvas)
    if (index < data.length-1)
    {
       setIndex(index + 1);
    }
    else 
    {
       setIndex(0);
    }
    event.preventDefault();
    console.log(data[index].canvas);
    console.log(data[index].designer);
   /* return (
        <div>
        <ol>
        <li>{data[index].canvas}</li>
        <li>{data[index].designer}</li>
    </ol>
    </div>
    );*/
}
return(
    <div>
        <button id="Next" onClick={handleClick}>Next</button>
    <div>  {handleClick}</div> 
    <div>
        <ol>
        <li>{data[index].Album}</li>
        <li>{data[index].Author}</li>
        <li>{data[index].Url}</li>
        <li>{data[index].song}</li>
    </ol>
    </div>
    </div>
);

}
