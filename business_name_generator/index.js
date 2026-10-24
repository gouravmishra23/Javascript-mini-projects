
function firstWord() {
    // let a = "crazy";
    // let b = "Fire";
    // let c = "Amazing";
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "crazy";
            break;

        case 1:
            return "Fire";
            break;

        case 2:
            return "Amazing";
            break;
    }
}

function secondWord() {
    // let a = "Engine";
    // let b = "Food";
    // let c = "Garments";
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "Engine";
            break;

        case 1:
            return "Food";
            break;

        case 2:
            return "Garments";
            break;
    }

}

function thirdWord() {
    // let a = "Bros";
    // let b = "Limited";
    // let c = "Hub";
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "Bros";
            break;

        case 1:
            return "Limited";
            break;

        case 2:
            return "Hub";
            break;
    }
}

//function calling

console.log(firstWord() +" "+ secondWord() +" "+ thirdWord());