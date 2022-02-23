const createEditModalTemplate = (word) => {

    return (
        `<section class="modal modal__edit">
        <form class="modal__content" method="post" enctype="multipart/form-data">
            <h2>Edit word</h2>
            <button class="modal__button-close" type="reset"></button>
            <div class="modal__container">
                <fieldset>
                    <label for="word">term:</label>
                    <input class="modal__input modal__term"  name="word" id="word" type="text" value=" ${word.word}"  required>
                </fieldset>
                <fieldset>
                    <label for="definition"> definition:</label>
                    <input class="modal__input modal__definition" name="definition" id="definition" value="${word.definition}" type="text" required>
                </fieldset>
                <fieldset>
                    <label for="set">set name:</label>
                    <input class="modal__input modal__set" name="set" id="set" type="text" value="${word.set}" required>
                </fieldset>
            </div>
            <div class="word__btn-container">
                <button class="modal__button" type="submit">edit</button>
            </div>
        </form>
    </section>`
    );
    };
    
    
    export { createEditModalTemplate };