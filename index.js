import { createwordItemTemplate } from './js/templates/wordItem.js';
import { createwordDefinitionTemplate } from './js/templates/wordDefinition.js';
import { createwordListTemplate } from './js/templates/wordList.js';
import { createAddModalTemplate } from './js/templates/addModal.js';
import { createAddButtonTemplate } from './js/templates/addButton.js';
import { createCollectionsButtonTemplate } from './js/templates/homeButton.js';
import { createSetItemTemplate } from './js/templates/setItem.js';
import { createSetListTemplate } from './js/templates/setList.js';
import { RenderPosition, renderElement, createElement } from './js/render.js';
import { createEditModalTemplate } from './js/templates/editModal.js';

import { getApi, deleteWord, editWord } from './js/data.js';
import { getCollections, renderCards } from './js/collections.js';
import { cleanElement } from './js/scaffolding.js';
import { setFormSubmit } from './js/form.js';
import { renderItem, renderAddModal } from './js/renderElement.js';
import { Cart } from './js/classCard.js'


// https://www.npmjs.com/package/json-server?activeTab=versions#getting-started
let setListData = [];
let wordsArr = [];


const mainContainer = document.querySelector('.learnWords');

renderElement(createAddButtonTemplate(), mainContainer, RenderPosition.BEFOREEND);
renderElement(createwordListTemplate(), mainContainer, RenderPosition.BEFOREEND);

const cartList = document.querySelector('.word__list');
const addButton = document.querySelector('.button-add');

renderElement(createSetListTemplate(), cartList, RenderPosition.AFTEREND);
const setListElement = document.querySelector('.set__list');

const onSuccessAdsLoad = (wordAPI) => {
    wordsArr = wordAPI;
    getCollections(wordsArr, setListData);
    renderItem(setListData, setListElement, createSetItemTemplate);
    initListenerCollection();
};


const onErrorAdsLoad = (error) => {
    console.log('упс');
};


getApi(onSuccessAdsLoad, onErrorAdsLoad);



const initListenerCollection = () => {
    const collectionList = document.querySelector('.set__list');
    const setButtons = collectionList.querySelectorAll('.cart__set');
    setButtons.forEach(el => {
        el.addEventListener('click', () => {
            cleanElement(cartList);
            renderCards(wordsArr, (el.innerHTML).trim(), createwordItemTemplate, cartList);
            cleanElement(collectionList);
            initListenerWord();
            initDeleteItemListener();
            initEditItemListener();
            if (!document.querySelector('.home__button')) {
                renderElement(createCollectionsButtonTemplate(), mainContainer, RenderPosition.BEFOREEND);
            }

            initListenerAllCollectionBtn();
        })
    });
}

const initListenerAllCollectionBtn = () => {
    const allCollectionBtn = document.querySelector('.home__button');
    const wordList = document.querySelector('.word__list');

    allCollectionBtn.addEventListener('click', () => {
        renderItem(setListData, setListElement, createSetItemTemplate);
        cleanElement(wordList);
        allCollectionBtn.remove();
        initListenerCollection();
    })
    allCollectionBtn.removeEventListener('click', initListenerAllCollectionBtn);
}

const initListenerWord = () => {
    const wordsCarts = document.querySelectorAll('.word__item');
    wordsCarts.forEach(el => {
        const content = el.querySelector('.word__content');
        content.addEventListener('click', () => {

            let idItem = el.getAttribute('data-word');
            let jsonItem;

            wordsArr.forEach(el => {
                if (el.id == idItem) {
                    jsonItem = wordsArr.indexOf(el);
                }
            });

            let current = wordsArr[jsonItem];

            if (!current.isOpen == true) {
                let newWordTemplate = createwordItemTemplate(wordsArr[jsonItem]);
                let newWordElement = createElement(newWordTemplate);

                current.isOpen = true;
                el.replaceWith(newWordElement);
                initDeleteItemListener();
                initEditItemListener();
                initListenerWord()
            } else {
                let newWordTemplate = createwordDefinitionTemplate(wordsArr[jsonItem]);
                let newWordElement = createElement(newWordTemplate);
                current.isOpen = false;
                el.replaceWith(newWordElement);
                initListenerWord();
            }

        })
    })

};

const initDeleteItemListener = () => {
    const wordsCarts = document.querySelectorAll('.word__item');
    wordsCarts.forEach(el => {
        const idElement = el.getAttribute('data-word');
        const deleteElement = el.querySelector('.btn-delete');


        deleteElement.addEventListener('click', (evt) => {
            evt.preventDefault();
            deleteWord(idElement);
        })
    })

};

const initEditItemListener = () => {
    const wordsCarts = document.querySelectorAll('.word__item');
    wordsCarts.forEach( el => {
        const editElement = el.querySelector('.btn-edit');


        let idItem = el.getAttribute('data-word');
        let jsonItem;

        wordsArr.forEach(el => {
            if (el.id == idItem) {
                jsonItem = wordsArr.indexOf(el);
            }
        });

        let current = wordsArr[jsonItem];

        editElement.addEventListener('click', (evt) => {
            renderElement(createEditModalTemplate(current), mainContainer, RenderPosition.BEFOREEND);
            initsentEditWordListener(idItem);

        })
    })

};

const initsentEditWordListener = (idItem) => {
    const form = document.querySelector('.modal__content');
  
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const formWordElement = form.querySelector('#word').value.trim();
        const formDefinitionElement = form.querySelector('#definition').value.trim();
        const formSetElement = form.querySelector('#set').value.trim();

        const editCart = JSON.stringify(new Cart(formWordElement, formDefinitionElement, formSetElement));
        editWord(editCart, idItem);
    })

    form.addEventListener('reset', (evt) => {
        evt.preventDefault();
        let modal = document.querySelector('.modal__edit');
        form.remove();
        modal.remove();
      })
}

//setFormSubmit открывает модальное окно  и добавляет слово
addButton.addEventListener('click', () => {
    renderAddModal(mainContainer, createAddModalTemplate);
    setFormSubmit();
});


