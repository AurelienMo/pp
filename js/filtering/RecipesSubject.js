class RecipesSubject {
    constructor() {
        this.observers = [];
    }

    subscribe = (observer) => {
        this.observers.push(observer);
    }

    run = (action) => {
        // {
        //     'type': 'ingredient_search',
        //     value
        // }
        this.observers.forEach(observer => observer.update(action));
    }
}
