/* eslint-disable react/prop-types */
const Currently = ({ currentCook }) => {
  const totalTime = currentCook.reduce(
    (sum, recipe) => sum + recipe.preparing_time,
    0
  );

  const totalCalories = currentCook.reduce(
    (sum, recipe) => sum + recipe.calories,
    0
  );
  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-3xl text-center mb-2">
          Currently cooking: {currentCook.length}
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
            {currentCook.length > 0 ? (
              currentCook.map((recipe, index) => (
                <tr key={recipe.recipe_id}>
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time} minutes</td>
                  <td>{recipe.calories} kcal</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No cooking stats yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center">
        <p>Total Time: {totalTime} minutes</p>
        <p>Total Calories: {totalCalories} kcal</p>
      </div>
    </div>
  );
};

export default Currently;
