// Code your solutions in this file
const people = ["Lisa", "Kaitlyn", "Jan"]

function writeCards(people, events) {
   let thankYouCards = []
    for(let i = 0; i < people.length; i ++){
        thankYouCards.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`)
    }
    return thankYouCards;
}

function countDown(num) {
    while (num > 0) {
        console.log (num);
        num -= 1;
    }
    console.log(num);
}
