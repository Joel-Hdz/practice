const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
function makeEight() {
    let eightSuits = []
    for (let i = 0; i < 8; i++) {
        eightSuits.push(SUITS)
    }
    return eightSuits
}
const eight = makeEight();
console.log(eight.flat(8))