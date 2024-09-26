const getStoredCookRecipe = () => {
  const storedCookRecipe = localStorage.getItem("cook-recipe");
  if (storedCookRecipe) {
    return JSON.parse(storedCookRecipe);
  }
  return [];
};

const saveCookRecipe = (id) => {
  const storedCookRecipe = getStoredCookRecipe();
  const exit = storedCookRecipe.find((cookId) => cookId === id);

  if (!exit) {
    storedCookRecipe.push(id);
    localStorage.setItem("cook-recipe", JSON.stringify(storedCookRecipe));
  }
};

export { getStoredCookRecipe, saveCookRecipe };
