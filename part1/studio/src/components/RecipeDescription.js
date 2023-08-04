import React from 'react';
import RecipeAuthor from './Description.js';

class RecipeDescription extends React.Component{
 render() {

return ( 
        <div> 
            <div>
        <h1>Recipe Title</h1>
        <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>
);

}
}

export default RecipeDescription;