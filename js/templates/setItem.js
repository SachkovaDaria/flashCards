const createSetItemTemplate = (set) => {

    return (
        `<button class="cart__set set" data-set='${set.id}'>
         ${set.setName}
        </button>`
        )
    };
    
    
    export { createSetItemTemplate };