/* **************************************************************
Make a function createNewElement(tagName, text) that takes in 2 
parameters and returns a new element with the correct text
************************************************************** */
function createNewElement(tagName, text) {
    let newEl = document.createElement(tagName);
    newEl.innerText = text;
    return newEl;
}

console.log(createNewElement('p', 'I am a software engineer'));
console.log(createNewElement('h1', 'General Assembly'));
console.log(createNewElement('p', 'SEI 1019'));

/* ************************************************************ */


/* **************************************************************
Make a function giveMeKeys(array) that takes in an array of objects
and returns a new array with all of the keys from each object
************************************************************** */
const instuctors = [
    { rome: 'Rome', pete: 'Pete' },
    { mike: 'Mike', dex: 'Dexter' },
    { ga: 'General Assembly', cohort: 'SEI1019' }
]

const giveMeKeys = (array) => {
    let objKeys = [];
    for (entry of array) {
        //let entryKeys = Object.keys(entry);
        //objKeys = objKeys.concat(entryKeys);
        //of use for in
        for (key in entry) {
            objKeys.push(key);
        }
    }
    return objKeys;

}

console.log(giveMeKeys(instuctors));

/* ************************************************************ */