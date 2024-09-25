import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

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
      <div className="grid md:grid-cols-4">
        <div className="border md:col-span-3">
          <div className="grid md:grid-cols-2 gap-4">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
        <div className="border">This is for table</div>
      </div>
    </div>
  );
};

export default Recipes;
