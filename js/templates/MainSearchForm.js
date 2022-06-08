class MainSearchForm {
    constructor(subject) {
        this.subject = subject;
        this.wrapper = document.createElement('div')
        this.formWrapper = document.querySelector('.search-form-wrapper');
    }

    onChange = () => {
        this.wrapper
            .querySelector('input')
            .addEventListener('keyup', (e) => {
                const value = e.target.value;
                    this.subject.run(
                        {
                            'type': 'main_search',
                            value
                        }
                    )
            })
    }

    build = () => {
        this.wrapper.innerHTML = `
        <form>
            <div>
                <input placeholder="Rechercher une recette" type="text" />
            </div>
        </form>
        `;
        this.formWrapper.appendChild(this.wrapper);
        this.onChange();
    }
}
