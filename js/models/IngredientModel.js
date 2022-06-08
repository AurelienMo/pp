class IngredientModel {
    _ingredient;
    _quantity;
    _unit;
    constructor(ingredient) {
        this._ingredient = ingredient.ingredient;
        this._quantity = ingredient.quantity ?? '';
        this._unit = ingredient.unit ?? ''
    }
}
