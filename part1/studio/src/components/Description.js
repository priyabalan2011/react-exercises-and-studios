import styles from './Description.module.css';
import React from 'react';

export default function RecipeAuthor()
{
    let authorLink="https://www.steffisrecipes.com/2016/08/chettinad-chicken-biryani-in-pressure.html";
    let authorPhoto="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTdJ-TCSbsPogBA6didN8I-bBeJPC80cSTd-v7a7BW6xYrm-_N6xsIY9yTkXj3pfd0-agwHGDeBMj_aCNDJnyfNzi13G42QZ_kt7ldqqZAh21aA6eG78cNNCnSj9u4NRo/s45-c/IMG-20151226-WA0001.jpg";
    let authorName="Angela Steffi";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );

}

