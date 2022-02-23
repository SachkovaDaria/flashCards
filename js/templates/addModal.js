const createAddModalTemplate = () => {

return (
    `<section class="modal modal__add">
    <form class="modal__content" method="post" enctype="multipart/form-data">
        <h2>Add word</h2>
        <button class="modal__button-close" type="reset"></button>
        <div class="modal__container">
            <fieldset>
                <label for="word">term:</label>
                <input class="modal__input modal__term"  name="word" id="word" type="text"  placeholder="cat" required>
            </fieldset>
            <fieldset>
                <label for="definition"> definition:</label>
                <input class="modal__input modal__definition" name="definition" id="definition" type="text" placeholder="What is it about?" required>
            </fieldset>
            <fieldset>
                <label for="set">set name:</label>
                <input class="modal__input modal__set" name="set" id="set" type="text"  placeholder="Name of set" required>
            </fieldset>
        </div>
        <div class="word__btn-container">
            <button class="modal__button" type="submit">add</button>
        </div>
    </form>
</section>`
);
};


export { createAddModalTemplate };