const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};

/**
 * @param {string} template
 */
const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstChild;
};

/**
 * @param {ParentNode&Node|ChildNode&Node} parent
 * @param {Node|String} child
 * @param {RenderPosition} place
 */
const render = (parent, child, place) => {
    switch (place) {
        case RenderPosition.BEFOREBEGIN:
            parent.before(child);
            break;

        case RenderPosition.AFTERBEGIN:
            parent.prepend(child);
            break;

        case RenderPosition.BEFOREEND:
            parent.append(child);
            break;

        case RenderPosition.AFTEREND:
            parent.after(child);
            break;
    }
};

const renderElement = (template, parent, place) =>{
    const cartTemplate = template;
    const cartElement = createElement(cartTemplate);

    render(parent, cartElement, place);
}


export {RenderPosition, renderElement, createElement };
