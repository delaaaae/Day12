function myPetsFunction() {
    return myPetsArray[1].name[1];
}

var myPetsArray = [
    {
        animalType: [
            "Dog",
            "Cat",
            "Bird"
        ]
    },
      {
            name:[
            "Pujdo",
            "Maca",
            "Tweety"
        ]
    }
];


console.log(myPetsFunction());
module.exports = myPetsFunction;
module.exports.myPets =myPetsArray;