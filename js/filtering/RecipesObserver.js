class RecipesObserver {
    constructor(defaultRecipes) {
        this.recipesWrapper = document.querySelector('.recipes-wrapper');
        this._defaultRecipes = defaultRecipes;
        this._mainSearch = '';
        this._listIngredients = []
    }

    update = (action) => {
        this.recipesWrapper.innerHTML = "";
        switch (action.type) {
            case 'main_search':
                this._mainSearch = action.value;
                this._defaultRecipes
                    .filter(recipe => {
                        let hasResult = recipe._name.toLowerCase().includes(action.value.toLowerCase()) || recipe._description.toLowerCase().includes(action.value.toLowerCase())
                        if (this._listIngredients.length > 0 && hasResult) {
                             hasResult = recipe._ingredients.filter(ingredient => this._listIngredients.includes(ingredient._ingredient)).length > 0;
                        }

                        return hasResult ? recipe : false;
                    })
                    .forEach(recipe => {
                        const Template = new RecipeCard(recipe);
                        this.recipesWrapper.appendChild(Template.createCard());
                    })
                break;
            case 'ingredient_search':
                this._listIngredients.push(action.value);
                this._defaultRecipes
                    .filter(recipe => {
                        const ingredients = recipe._ingredients.filter(ingredient => ingredient._ingredient === action.value);
                        let hasResult = false;
                        if (ingredients.length > 0) {
                            hasResult = true;
                        }
                        if (this._mainSearch.length > 0) {
                            hasResult = recipe._name.toLowerCase().includes(action.value.toLowerCase()) || recipe._description.toLowerCase().includes(action.value.toLowerCase());
                        }

                        if (hasResult) {
                            return recipe;
                        }

                        return false;
                    })
                    .forEach(recipe => {
                        const Template = new RecipeCard(recipe);
                        this.recipesWrapper.appendChild(Template.createCard());
                    })

                break;
            case 'ustensil_search':
                break;
        }
    }
}
