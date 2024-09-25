import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import RecipeTable from "./RecipeTable";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = (recipe) => {
    const newWantToCook = [...wantToCook, recipe];
    // console.log(newWantToCook);
    setWantToCook(newWantToCook);
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
      <h1 className="text-5xl text-center mb-4">Our Recipes</h1>
      <div className="grid md:grid-cols-3">
        <div className="border  md:col-span-2">
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
        <div className="border ">
          <RecipeTable />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
