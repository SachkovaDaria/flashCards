import { createWord } from './data.js';
import { Cart } from './classCard.js';


const setFormSubmit = () => {
  const form = document.querySelector('.modal__content');
  document.body.appendChild(form);
  form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const formWordElement = form.querySelector('#word');
      const formDefinitionElement = form.querySelector('#definition');
      const formSetElement = form.querySelector('#set');
      const newCart = JSON.stringify(new Cart(formWordElement.value, formDefinitionElement.value, formSetElement.value));
      createWord(newCart, onSuccessSubmitForm, onErrorSubmitForm);
  });

  form.addEventListener('reset', (evt) => {
    evt.preventDefault();
    let modal = document.querySelector('.modal__add');
    form.remove();
    modal.remove();
  })
    
};


const onSuccessSubmitForm = () => {
  console.log('Данные отправленны');
};
const onErrorSubmitForm = () => {
  console.log('Ошибка при отправки данных из модального окна');
};

export { setFormSubmit };