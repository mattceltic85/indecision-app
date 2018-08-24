class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

// class Student extends Person {
//     constructor(name, age, major) {
//         super(name, age);
//         this.major = major;

//     }
//     hasMajor() {
//         return !!this.major;
//     }
//     getDescription(){
//         let description = super.getDescription();
//         if (this.hasMajor()){
//            description += ` Their major is ${this.major}.`;
//         }

//         return description;
//     }
// }

class Traveller extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
        console.log("constr", this.location)
    }
    
    getLocation(){
        let description = super.getDescription();
        if (this.location){
            description += ` This person is currently in ${this.location}.`;
        }

        return description;
    }
}

// Traveller -> Person (extends)
// Add support for homeLocation




const me = new Traveller('Matt Garrity', 25, 'London');
console.log(me.getLocation());

// const other = new Student();
// console.log(me.getDescription());