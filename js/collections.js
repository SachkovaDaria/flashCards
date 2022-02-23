import { counter } from './scaffolding.js';
import { renderItem } from './renderElement.js'; 
import { Set } from './classSet.js'


const getCollections = (arr, resultArr) => {

    let collectionsArr = [];

    arr.forEach(el => {
        let collectionName = el.set;
        collectionsArr.push(collectionName);
    });

    const collectionsSets = collectionsArr.filter((it, index) => index === collectionsArr.indexOf(it = it));
    const set = new Set(collectionsArr.entries());


    collectionsSets.forEach(el => {
        const newSet = new Set(el, counter());
        resultArr.push(newSet);
    })

}


const renderCards = (wordsArr, collectionName, template, parent) => {
    let sortArr = [];

    wordsArr.forEach(el => {
        if (collectionName == el.set) {
            sortArr.push(el);
        }
    });

    renderItem(sortArr, parent, template);
    return;
}



export { getCollections, renderCards };