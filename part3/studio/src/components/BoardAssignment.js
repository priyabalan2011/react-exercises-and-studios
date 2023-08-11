import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         id: 1,
         name: "Soft Drinks"

      },
      {
         id: 2,
         name: "Latte"

      },
      {
         id: 3,
         name: "Oatmilk Latte"

      }
   ];

   
   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);

   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
     
         {boards.map((data,id)=>{
            return( 
              <option value ={data.name}>{data.name}</option>
            );
          })}
        
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}