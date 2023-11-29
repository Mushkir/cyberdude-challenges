//* Types of Functions:
//*     - Expression
//*     - Return
//*     - Pass Arguments and Receive Parameters
//*     - IIFE (Immediately Invoked Function Expression)


//* Scenario: Daily Routine

//* Calculating Productive Time with Expression Function
const calcProductiveTime = function (works) {
    return works.reduce((accumulator, task) => accumulator + task.duration, 0)
}



//* Finding Break with Arrow Function with return
const breakAlert = (myActivityTotalTime) => {
    const humanProductiveHours = 240

    if(myActivityTotalTime < humanProductiveHours) {
        return "Rest Onnum thevele, moodittu olungaa veleye paaru"
    } else {
        return "Dai pothum niruththudaa venna mavane!!!"
    }
}

//* Counting Prior Activities
function countActivities(...works) {
    const count = works.filter((value) => value.type === "Prior").length

    if(count > 0 && count < 2) {

        console.log("7 Kaluthe vayasaayidichchi, Ithu Ethukku kaanum unakku???");

    } else if(count > 3 && count < 5) {

        console.log("Thambi! Nee romba over a pore; Manda baththirem");

    } else {

        console.log("Onakku death'u confirm da");
    }
}


//* IIFE Function
( function () {
    console.log("My Brain's mindvoice: Innakki Ennevellaam Panna Poraano...😢");

    // Defining Empty Array
    const myActivity = [];

    const firstActivity = { name: "Task Pannanum", type: "Prior", duration: 60}
    // const secondActivity = { name: "Research Report Eluthenum 😢", type: "Prior", duration: 60}
    // const thirdAct = { name: "Project Work pannanum 😢😢😢", type: "Prior", duration: 100}
    // const fourthAct = { name: "PHP Leaaring vere irukku; Athu pannanum", type: "Prior", duration: 100}

    myActivity.push(firstActivity)
    // myactivity.push(secondActivity)
    // myactivity.push(thirdAct)
    // myactivity.push(fourthAct)


    const showActivies = (myArray) => {
        console.log("Innaya List: ");
        let i = 0
       myArray.forEach(element => {
        console.log(`${i += 1}: ${element.name}, Time: ${element.duration}`);
        });
    }


    showActivies(myActivity)

    const myProductiveTotal = calcProductiveTime(myActivity)
    const breakAler = breakAlert(myProductiveTotal)

    countActivities(firstActivity)
    console.log(breakAler);

})()