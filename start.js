//1
const person = {
    Name: "Mario",
    LastName: "Quezada",
    Age: "36",
    Nationality: "Dominican Republic",
    Job: "Developer",
};

for (const propName in person) {
    console.log(`${propName}: ${person[propName]}`);
}

//2
const getObjectValues = () => {
    console.log(Object.values(person));
};
getObjectValues();

//3

const person2 = {
    Name: "Amalie",
    lastName: "Boye",
    job: "Student",
    age: 33,
    city: "Berlin",
    method1: function() {
        console.log(
            `${this.Name} ${this.lastName} is a ${this.age} ${this.job} in ${this.city}`
        );
    },
};

person2.method1();

//Bonus 1

const bonus1 = {
    cats: 1,
    dogs: 2,
    turtles: 4
};

const objectToArray = () => {
    console.log(Object.entries(bonus1));
};

objectToArray();

//Bonus 2

const objectToProperties = () => {
    console.log(Object.keys(bonus1));
};

objectToProperties();

//Bonus 3

const Name = { Name: "Chico" };
const LastName = { LastName: "Loco" };

const MergeObjects = () => { console.log({...Name, ...LastName }); }

MergeObjects();


///Extra Credit:they have the same property values, so it wouldnt change anything since they are already the same.

///Bonus 4

const Object1 = { a: 1, b: 2, c: 3 };




function flipcopy(object) {
    let copy = {};
    const entries = Object.entries(object)
    for (const i of entries) {
        copy[i[1]] = i[0]

    }
    console.log(copy);



}
flipcopy(Object1);


/// Bonus 5

const Object2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };


function thebigflip(o) {
    const array1 = Object.values(o);
    const array2 = Object.keys(o);
    console.log([array1, array2]);


};

thebigflip(Object2);