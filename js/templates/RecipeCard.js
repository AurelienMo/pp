class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe;
        this.wrapper = document.createElement('section');
        this.wrapper.classList.add('recipe-card-wrapper');
    }

    get recipe() {
        return this._recipe;
    }

    createCard = () => {
        const ingredientsCard = this._recipe._ingredients.map(ingredient => {
            return `
                <span><strong>${ingredient._ingredient}:</strong> ${ingredient._quantity}${ingredient._unit}</span>
            `
        })

        this.wrapper.innerHTML = `
            <div style="flex: 1; background-color: #C7BFBE;">

            </div>
            <div style="flex: 1; background-color: #E7E7E7; padding: 20px">
                <div style="display: flex; justify-content: space-between">
                    <h1 style="font-size: 1rem;">${this._recipe._name}</h1>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <i class="fa-solid fa-clock"></i>
                        <span style="font-size: 1rem; padding-left: 5px;">${this._recipe._time} min</span>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <div style="flex: 1">
                        <div style="display: flex; flex-direction: column; font-size: 12px;">
                            ${ingredientsCard}
                        </div>
                    </div>
                    <div style="flex: 1.2;">
                        <span style="font-size: 12px">
                            ${this._recipe._description}
                        </span>
                    </div>
                </div>
            </div>
        `;

        return this.wrapper;
    }
}
