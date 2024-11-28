import { useState } from "react";
import IngredientsList from "./IngredientsList";
import RecipeSection from "./RecipeSection";

const Form = () => {
  const [ingredients, setIngredients] = useState(["Tomato","Tomato","Tomato","Tomato"]);
  const [recipeShown, setRecipeShown] = useState(false);



  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function handleRecipeSubmit() {
    setRecipeShown((prevVal) => !prevVal);
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
          toggle={handleRecipeSubmit}
        />
      )}
      {recipeShown && <RecipeSection />}
    </main>
  );
};

export default Form;
