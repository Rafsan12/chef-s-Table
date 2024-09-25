/* eslint-disable react/prop-types */
const Recipe = ({ recipe, handleWantToCook }) => {
  const { recipe_image, recipe_name, short_description, ingredients } = recipe;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={recipe_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>{short_description}</p>
        <div className="border w-full"></div>
        <p className="text-left">ingredients: 0{ingredients.length}</p>
        <ul className="list-disc pl-6 mt-2">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <div className="card-actions  ml-32 mt-6">
          <button
            onClick={() => handleWantToCook(recipe)}
            className="btn btn-primary"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
