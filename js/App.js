class App {
    recipesWrapper;
    recipesList;
    constructor() {
        this.recipesWrapper = document.querySelector('.recipes-wrapper');
    }

    fetchRecipes = async () => {
        const response = await fetch('/data/recipes.json')
        const recipes = await response.json();
        this.recipesList = recipes.map(recipe => new RecipeFactory(recipe));
    }

    run = async () => {
        await this.fetchRecipes();

        this.recipesSubject = new RecipesSubject();
        this.recipesResult = new RecipesObserver(this.recipesList);
        this.recipesSubject.subscribe(this.recipesResult);

        const SearchForm = new MainSearchForm(this.recipesSubject);
        SearchForm.build();

        this.recipesList.forEach(recipe => {
            const Template = new RecipeCard(recipe);
            this.recipesWrapper.appendChild(Template.createCard())
        })
    }
}

const app = new App();
app.run();
