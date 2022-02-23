import { RenderPosition, renderElement } from './render.js';

const renderItem = (arr, parent, template) => {
    for (let i = 0; i < arr.length; i++) {
        renderElement(template(arr[i]), parent, RenderPosition.BEFOREEND);
    }
}


const renderAddModal = (parent,template) => {
    renderElement(template(), parent, RenderPosition.BEFOREEND);
};

export { renderItem, renderAddModal };