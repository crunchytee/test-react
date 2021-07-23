const myObj = {
    "1": 1,
    "2": 2
}
Object.defineProperty(myObj, {configurable: false,})
console.log("object = " + JSON.stringify(myObj));
delete myObj[1];
console.log("object after delete = " + JSON.stringify(myObj));
