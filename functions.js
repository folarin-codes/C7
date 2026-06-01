// INTRODUCTION TO FUNCTIONS



//  3 WAYS TO DECLARE A FUNCTION

function nameOfTheFunction(){

}


// let nameOfFunction = ()=>{

// }


// let anotherFunction = function(){

// }



function introduction(){

    console.log("Hello my name is Adefolarin , and I am happy to meet you!")
}


// introduction()

// function sumOfTwoNumbers(){

//     console.log(5 + 5)


// }


// let x;
// let y;




function sumOfTwoNumbers(x , y, ){
    // console.log(z)
    // let sum = x + y + z;
    console.log(sum)
}

// sumOfTwoNumbers(15 , 25)




const CURRENT_YEAR = 2026;


console.log(CURRENT_YEAR)
const NATIONALITY = "NIGERIAN";

const folaObject = {
    name: "Suberu Micheal Adefolarin",
    yearOfBirth: 1996,
    sex : 'male',
    nationality: "nigerian",
    calculateAge : function(){
       console.log(CURRENT_YEAR - this.yearOfBirth);
    }
}


const aHMEDObject = {
    name: "Pedro Ahmed",
    yearOfBirth: 2001,
    sex : 'male',
    nationality: "Nigerian"
}

const emmnuelObject = {
    name: "Ojo Emmanuel",
    yearOfBirth: 2005,
    sex : 'male',
    nationality: "Ghanian"
}

const elizebethObject = {
    name: "Madu Elizebeth",
    yearOfBirth: 2010,
    sex : 'female',
    nationality: "Nigerian"
}

function checkVotingEligibility(name , yearOfBirth, nationality){

    if(nationality.toUpperCase() !== NATIONALITY){
        console.log(name, "is not eligible to vote in the Nigerian election")
    }
    else if( CURRENT_YEAR - yearOfBirth < 18){
        console.log(name, "is not old enough to vote!")
       
    }
    else{

        console.log(name , " is eligible to vote!")

    }

}


// checkVotingEligibility(folaObject.name , folaObject.yearOfBirth, folaObject.nationality)
// checkVotingEligibility(aHMEDObject.name, aHMEDObject.yearOfBirth,aHMEDObject.nationality)
// checkVotingEligibility(elizebethObject.name, elizebethObject.yearOfBirth, elizebethObject.nationality)

folaObject.calculateAge()











// const String = {

//     value : "Nigerian",
//     toUpperCase : function(){



//     }
// }