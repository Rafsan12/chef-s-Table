import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import RecipeTable from "./RecipeTable";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantToCooks, setWantToCooks] = useState([]);

  const handleWantToCook = (recipe) => {
    const newWantToCook = [...wantToCooks, recipe];
    // console.log(newWantToCook);
    setWantToCooks(newWantToCook);
  };

  useEffect(() => {
    const recipesData = async () => {
      try {
        const res = await fetch("recipe.json");
        const result = await res.json();
        setRecipes(result);
      } catch (error) {
        console.log(error);
      }
    };

    recipesData();
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center mb-8 mt-8">Our Recipes</h1>
      <div className="grid md:grid-cols-3">
        <div className="  md:col-span-2">
          <div className="grid md:grid-cols-2 gap-4">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.recipe_id}
                recipe={recipe}
                handleWantToCook={handleWantToCook}
              />
            ))}
          </div>
        </div>
        <div>
          <RecipeTable wantToCooks={wantToCooks} />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
