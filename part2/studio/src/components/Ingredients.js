import  recipedata  from "./recipe.json";
function IngredientList() {
  
      const Ingredientlist=recipedata.map((data) => (
        <div>
       {/* <div key={data.name}><h1>{data.ingredients}</h1></div> */}
       <h3>Ingredients</h3>
        <div key={data.name}>
        {data.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </div></div>
       )  );
       
     return( Ingredientlist);
 //component continues;
 }

 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 