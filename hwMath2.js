console.log ("Manage a Todo List");
let todo = ["one", "two", "three",];
todo.push ("Buy groceries");
todo.unshift ("Clean Room");
let store1 = "[Buy Groceries]";
console.log (todo);
console.log (store1);
todo.pop([4]);
let store2 = todo.includes("Clean Room");
console.log (store2);
todo.shift();
console.log(todo.length);
console.log(todo);


console.log ("Modify an Array of Colors");

let colors = ["Red", "Blue", "Green"];
colors.push ("Yellow");
console.log (colors);
colors.shift ();
colors.unshift ("Purple");
console.log (colors);
let store3 = colors.includes ("Blue");
console.log (store3);
colors.splice(1,1);
console.log (colors);



console.log ("Guest List");

let guests = ["Alice", "John Doe"];
guests.push("Rahim", "Karim", "Jadu");
console.log (guests);
guests.shift();
console.log (guests);
guests.unshift("newGuest");
console.log (guests);
let store4 = guests.includes ("John Doe")
console.log (store4);
console.log (guests.length)




console.log ("Grade Evaluation");
let score = 50;
if(score>=90){
    console.log ("A");
}
else{
    if(score>=80){
        console.log ("B");
    }
    else {
        if(score>=70){
            console.log ("C");
        }
        else{
            if(score>=60) {
                console.log ("D");
            }
            else{
                console.log ("F");
            }
        }

    }
}



console.log ("Weather Check");

let temperature = 27;
let isRaining = "true";
let isSunny = "true"
if (temperature <= 0) {
    temperature = "Heavy Jacket"
    console.log (temperature);
}
else{
    if (temperature<=20 && isRaining=="true"){
        temperature = "Sweater and Raincoat";
        console.log (temperature);
    }
    else{
        if(temperature<=25 && isSunny=="true"){
            temperature = "T-shirt and Sunglasses";
            console.log (temperature);
        }
        else{
            console.log ("Regular Clothes");
        }
    }
}