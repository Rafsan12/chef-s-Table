/* eslint-disable react/prop-types */
const RecipeTable = ({ wantToCooks }) => {
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
                  <td>{recipe.cooking_time} minutes</td>
                  <td>{recipe.calories} kcal</td>
                  <button className="mt-4 border-2 bg bg-orange-400 text-black mr-2 px-4">
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
    </div>
  );
};

export default RecipeTable;
