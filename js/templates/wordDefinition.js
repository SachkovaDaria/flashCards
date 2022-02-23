const createwordDefinitionTemplate = (wordsArr) => {

    return (
       `<li class="word__item word__item--open" data-word="${wordsArr.id}">
                <div class="word__content">
                    ${wordsArr.definition}
                </div>
        </li>`
    );
};


export { createwordDefinitionTemplate };