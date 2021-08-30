import React from 'react'
import RecipeIngredentEdit from "./RecipeIngredentEdit"

export default function RecipeEdit() {
    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button className="btn recipe-edit_remove-button">x</button>
            </div>
            <div className="recipe-edit__details-grid">
                <lable htmlFor="name" className="recipe-edit__label">Name</lable>
                <input type="text" name="name" id="name" className="recipe-edit__input" />
                <lable htmlFor="name" className="recipe-edit__label">Cook Time</lable>
                <input type="text" name="cookTime" id="cookTime" className="recipe-edit__input"/>
                <lable htmlFor="name" className="recipe-edit__label">Servings</lable>
                <input type="number" min="1" name="servings" id="servings" className="recipe-edit__input"/>
                <lable htmlFor="name" className="recipe-edit__label">Instructions</lable>
                <textarea name="instructions" id="instructions" className="recipe-edit__input"/>
            </div>
            <br/>
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit_ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                <RecipeIngredentEdit />
                <RecipeIngredentEdit />
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary">Add Ingredient</button>
            </div>
        </div>
    )
}
