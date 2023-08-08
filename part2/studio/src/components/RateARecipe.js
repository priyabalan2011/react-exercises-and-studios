let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
//alert(props.rating);
  return (props.rating<=5 && props.rating>=1)?GiveRating(props):null;
}
function GiveRating(props) {
  alert("giverating");
  alert(stars[props.rating - 1]);
  return <h3>{stars[props.rating - 1]}</h3>;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
