function idCount() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = idCount();


const cleanElement = (el) => {
    el.innerHTML = '';
}

export { counter, cleanElement };
