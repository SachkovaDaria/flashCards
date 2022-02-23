const createwordItemTemplate = (wordsArr) => {

    return (
        `<li class="word__item" data-word="${wordsArr.id}">
                <div class="word__content">
                ${wordsArr.word}
                </div>
                <div class="word__item__list-btn">
                    <a class="btn-edit">edit</a>
                    <a class="btn-delete">delete</a>
                </div>
        </li>`
    );
};


export { createwordItemTemplate };