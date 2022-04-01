import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

function AddRecipe({ addNewRecipe }) {
  let history = useHistory();

  const [formRecipeData, setFormRecipeData] = useState({
    name: "",
    ingredients: "",
    steps: "",
    imageURL: "",
    originalURL: "",
    likes: 0,
  });

  const initialFormState = {
    name: "",
    ingredients: "",
    steps: "",
    imageURL: "",
    originalURL: "",
  };

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  function handleChange(e) {
    setFormRecipeData({
      ...formRecipeData,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddRecipeData(e) {
    e.preventDefault();

    const newRecipe = {
      name: formRecipeData.name,
      ingredients: formRecipeData.ingredients,
      steps: formRecipeData.steps,
      imageURL: formRecipeData.imageURL,
      originalURL: formRecipeData.originalURL,
      likes: formRecipeData.likes,
    };

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then(addNewRecipe)
      .then(setFormRecipeData(initialFormState));
    history.push("/");
  }

  return (
    <div>
      <br></br>
      <h1 className="addRecipe">AddRecipe</h1>
      <div className="addRecipeBorder test">
        <div className="ui grid">
          <form
            className="ui form center"
            onSubmit={(e) => handleAddRecipeData(e)}
          >
            <div className="required fifteen wide field">
              <label className="center" htmlFor="recipeName">
                Recipe Name:{" "}
              </label>
              <input
                type="text"
                name="name"
                ref={nameInputRef}
                value={formRecipeData.name}
                id={FormData.name}
                onChange={(e) => handleChange(e)}
                placeholder="Recipe Name"
              ></input>
            </div>
            <div className="required fifteen wide field">
              <label className="center" htmlFor="ingredients">
                Ingredients:{" "}
              </label>
              <textarea
                type="text"
                name="ingredients"
                value={formRecipeData.ingredients}
                id={FormData.ingredients}
                onChange={(e) => handleChange(e)}
                rows="4"
                cols="50"
                placeholder="List Ingredients - Please separate each ingredient by a comma"
              ></textarea>
            </div>
            <div className="required fifteen wide field">
              <label className="center" htmlFor="steps">
                Recipe Steps:{" "}
              </label>
              <textarea
                type="text"
                name="steps"
                value={formRecipeData.steps}
                id={FormData.steps}
                onChange={(e) => handleChange(e)}
                rows="4"
                cols="50"
                placeholder="List Recipe Steps - Please separate each step by a period"
              ></textarea>
            </div>
            <div className="fifteen wide field">
              <label className="center" htmlFor="imageURL">
                Image URL:{" "}
              </label>
              <input
                type="text"
                name="imageURL"
                value={formRecipeData.imageURL}
                id={FormData.imageURL}
                onChange={(e) => handleChange(e)}
                placeholder="Image Link"
              ></input>
            </div>
            <div className="fifteen wide field">
              <label className="center" htmlFor="originalURL">
                Source URL:{" "}
              </label>
              <input
                type="text"
                name="originalURL"
                value={formRecipeData.originalURL}
                id={FormData.originalURL}
                onChange={(e) => handleChange(e)}
                placeholder="Source Link"
              ></input>
            </div>
            <button className="ui submit button center" type="submit">
              Add Recipe
            </button>
          </form>
        </div>
      </div>
      <image href='public/alex-perri-bmM_IdLd1SA-unsplash.jpg'></image>
    </div>
  );
}

export default AddRecipe;
