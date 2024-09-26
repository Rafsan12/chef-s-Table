import { useState } from "react";
import Currently from "./Currently";

/* eslint-disable react/prop-types */
const RecipeTable = ({ wantToCooks }) => {
  const [currentCook, setCurrentCook] = useState([]);

  const handlePreparingCook = (recipe) => {
    const newCurrentCook = [...currentCook, recipe];
    setCurrentCook(newCurrentCook);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-3xl text-center mb-2 ">
          Want to cook: {wantToCooks.length}
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {wantToCooks.length > 0 ? (
              wantToCooks.map((recipe, index) => (
                <tr key={recipe.recipe_id}>
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time} minutes</td>
                  <td>{recipe.calories} kcal</td>
                  <button
                    onClick={() => handlePreparingCook(recipe)}
                    className="mt-4 border border-sky-600	 bg bg-orange-400 text-black mr-2 px-4 rounded-full py-2"
                  >
                    Preparing
                  </button>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No recipes selected yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <Currently currentCook={currentCook} />
      </div>
    </div>
  );
};

export default RecipeTable;
