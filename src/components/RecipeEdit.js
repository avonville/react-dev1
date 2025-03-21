import React, { useContext } from 'react'
import RecipeIngredentEdit from "./RecipeIngredentEdit"
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid'


export default function RecipeEdit({ recipe }) {
    const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

    function handleChange(changes) {
        handleRecipeChange(recipe.id, { ...recipe, ...changes })
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients]
		const index = newIngredients.findIndex(i => i.id === id)
		newIngredients[index] = ingredient
		handleChange({ ingredients: newIngredients })
    }

    function handleIngredientAdd() {
        const newIngredient = {
            id: uuidv4(),
            name: '',
            amount: ''
        }
        handleChange({ ingredients: [...recipe.ingredients, newIngredient]})
    }

    function handleIngredientDelete(id) {
        handleChange({ ingredients: recipe.ingredients.filter(i => i.id !== id)})
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button className="btn recipe-edit_remove-button" onClick={() => handleRecipeSelect(undefined)}>x</button>
            </div>
            <div className="recipe-edit__details-grid">
                <lable htmlFor="name" className="recipe-edit__label">Name</lable>
                <input type="text" name="name" id="name" value={recipe.name} onChange={e => handleChange({ name: e.target.value })} className="recipe-edit__input" />
                <lable htmlFor="name" className="recipe-edit__label">Cook Time</lable>
                <input type="text" name="cookTime" id="cookTime" value={recipe.cookTime} onChange={e => handleChange({ cookTime: e.target.value })} className="recipe-edit__input"/>
                <lable htmlFor="name" className="recipe-edit__label">Servings</lable>
                <input type="number" min="1" name="servings" id="servings" value={recipe.servings} onChange={e => handleChange({ servings: parseInt(e.target.value) || '' })} className="recipe-edit__input"/>
                <lable htmlFor="name" className="recipe-edit__label">Instructions</lable>
                <textarea name="instructions" id="instructions" value={recipe.instructions} onChange={e => handleChange({ instructions: e.target.value })} className="recipe-edit__input"/>
            </div>
            <br/>
            <div>
                <label className="recipe-edit__label">Ingredients</label>
                <div className="recipe-edit_ingredient-grid">
                    <div>Name</div>
                    <div>Amount</div>
                    <div></div>
                    {recipe.ingredients.map(ingredient => (
                        <RecipeIngredentEdit
                            key={ingredient.id}
                            handleIngredientChange={handleIngredientChange}
                            handleIngredientDelete={handleIngredientDelete}
                            ingredient={ingredient}
                        />
                    ))}
                </div>
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary" onClick={() => handleIngredientAdd()}>Add Ingredient</button>
            </div>
        </div>
    );
}
