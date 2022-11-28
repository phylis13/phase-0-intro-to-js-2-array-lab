// Write your solution here!
let cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return
}

function appendCat(name){
   return  [...cats, name]; 
}

function prependCat(name){
    return [name ,...cats];
}

function removeLastCat(){
   return cats.slice(0,cats.length-1);
}

function removeFirstCat(){
    return cats.slice(1);
}