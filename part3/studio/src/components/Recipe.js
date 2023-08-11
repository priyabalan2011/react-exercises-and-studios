const RecipeAuthor = () => {
   let authorLink = "https://pinchofyum.com/blueberry-matcha-latte";
   let authorPhoto = "https://pinchofyum.com/wp-content/assets/images/about/lindsay-hero.jpg";
   let authorName = "Lindsay";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%",width:"500px", height: "500px"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [ "oat milk",
   "matcha of choice",
   "frozen blueberries",
   "sugar",
   "warm water"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Blueberry Matcha Latte</h1>
            <p>Sweet summery drink perfection! Yummy blueberry syrup mixed into a matcha oat milk latte makes for the perfect iced drink for summertime. Yum!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://pinchofyum.com/wp-content/uploads/Blueberry-Matcha-Latte-13-1365x2048.jpg" alt="Blueberry Matcha Latte" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}