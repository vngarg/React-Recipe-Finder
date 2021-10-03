import React, { useState } from "react";

const Recipe = (props) => {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = (recipe) => {
    setIngredients(recipe);
  };

  const getCompleteRecipe = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {ingredients.label}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
                <ul>
                {
                    ingredients.ingredientLines.map((ingredient) => (
                        <li>{ingredient}</li>
                    ))
                }
                </ul>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center text-center">
        {props.recipe.map((recipe) => (
          <div className="col-12 col-md-3 m-3">
            <div class="card shadow-lg">
              <img
                src={recipe.recipe.image}
                class="card-img-top p-1"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{recipe.recipe.label}</h5>

                <div class="d-grid gap-2">
                  <button
                    class="btn btn-outline-success"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => getIngredients(recipe.recipe)}
                  >
                    Get Ingredients
                  </button>
                  <button
                    onClick={() => getCompleteRecipe(recipe.recipe.url)}
                    class="btn btn-outline-danger"
                    type="button"
                  >
                    Get Complete Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
