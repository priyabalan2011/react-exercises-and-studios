//import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/RecipeDescription.js';
import RecipeIngredients from './components/Ingredients.js';
import RecipePhoto from './components/Photos.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="recipePhotoBlock">
      <RecipePhoto />
      <div >
      <RecipeDescription />
      <RecipeIngredients />
   </div>
    </div></div>
  );
}

export default App;
