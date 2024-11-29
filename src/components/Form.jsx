import { useState } from "react";
import IngredientsList from "./IngredientsList";
import RecipeSection from "./RecipeSection";
import {getRecipeFromMistral} from '../ai'

const Form = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");



  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    const recipeMarkdown= await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown)
  }
  return (
    <main>
      <form action={addIngredient} className="form">
        <input
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g. oregano"
          className="input-field"
          name="ingredient"
        />
        <button className="input-btn">Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggle={getRecipe}
        />
      )}
      {recipe && <RecipeSection recipe={recipe}/>}
    </main>
  );
};

export default Form;
