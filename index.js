console.log("Working");

//what are Maps?
//It contains a unique key value pair.It preservers the order of insertion. The keys can be of any data types.

//How do we create a map?
//let myMap = new Map();

//How do we give values to it?
//There are two ways : 1. Insert array of arrays, 2. using set method

let myMap1 = new Map([
    [1,"This is a number"],
    ["1","This is a string"],
    [true,"This is a boolean"],
]);
console.log(myMap1);

//other Method is to use set Method

let myMap = new Map();
myMap.set("name","Riya");
myMap.set("age","25");
myMap.set(false,"This is a boolean value");
myMap.set("null",undefined)
console.log(myMap);

//get gives us the value if present otherwise undefined
console.log(myMap.get("name"));
console.log(myMap.get("age"));
console.log(myMap.get(false));
console.log(myMap.get("false"));//if a key is not present it returns us with undefined value

//has gives us boolean value true if the key is present else false
console.log(myMap.has("false"));
console.log(myMap.has(false));
console.log(myMap.has());

//delete - It deletes a particular key value pair
myMap.delete("null")
console.log(myMap);

//It clear the entire map 

//myMap.clear();
console.log(myMap);

//size - it gives us the size of map
console.log(myMap.size);

//typeOf - it gives us the data type of the that particular thing
console.log(typeof(myMap));//object

myMap.forEach(function(val,key){//first val then key
    console.log(`The key is ${key} and value is ${val}`);//tilda,backtic lying below the esc key
})

//keys()- these access all the keys
for(let key of myMap.keys()){
    console.log(key);
}

//values()- these access all the values
for(let value of myMap.values()){
    console.log(value);
}

//entries()- it prints the array of key value pairs
for(let value of myMap.entries()){
    console.log(value);
}


//sets - These consits a unique values only, no keys are present, the values ocur for only once
// values can be of any data type.

//How do we create a set?
//let mySet = new Set();

let mySet1 = new Set([33,5,88,"a","name",true]);
console.log(mySet1);
//It only takes unique values, if same values are added, they will be ignored
let mySet = new Set();
mySet.add("b")
mySet.add("age")
mySet.add("a")
mySet.add(false)
mySet.add("a")
mySet.add(1)
mySet.add(1)
mySet.add("b");
console.log(mySet);

console.log(mySet.has("b"));//if val not present it will gives us not defined error but if present 
//will give us true

//it deletes the value
console.log(mySet.delete(false));
console.log(mySet);

//mySet.clear();
//console.log(mySet);

mySet.forEach(function(val,key){//even for key values will be printed (applicable only for sets)
    console.log(val,key);
})

for(let value of mySet.values()){
    console.log(value);
}

//entries()- it prints the array of key value pairs where key and values both are values

for(let key of mySet.entries()){
    console.log(key);
}