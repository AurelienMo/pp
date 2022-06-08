class RecipeModel {
    _id;
    _name;
    _description;
    _servings;
    _time;
    _appliance;
    _ustensils;
    _ingredients;

    constructor(recipe) {
        this._id = recipe.id;
        this._name = recipe.name;
        this._description = recipe.description;
        this._servings = recipe.servings;
        this._time = recipe.time;
        this._appliance = recipe.appliance;
        this._ustensils = recipe.ustensils;
        this._ingredients = recipe.ingredients.map(ingredient => new IngredientFactory(ingredient));
    }
}
