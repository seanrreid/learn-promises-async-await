// Promises: https://javascript.info/promise-basics

const isVacation = true;

// Promises have the following static methods:
// Promise.resolve -> The promise has resolved, returns a value
// Promise.reject  -> The promise was rejected, returns an error
// Promise.all     -> Execute many promises in parallel
// Promise.race    -> Returns result/error of the first promise that finishes
// https://javascript.info/promise-api#

// Promise 1
const willSeanGoToWDW = new Promise(
    (resolve, reject) => {
        if (isVacation) {
            const parks = {
                first: 'The Magic Kingdom',
                second: 'Epcot'
            };
            resolve(parks);
        } else {
            const rejection = new Error(`It's not vacation time yet.`);
            reject(rejection)
        }
    }
)

// Promises have 3 basic states:
// 1 - Pending:     Sean is checking the calendar.
// 2 - Fulfilled:   Sean IS going to WDW!
// 3 - Rejected:    It's not time for vacation yet.

const askSean = () => {
    willSeanGoToWDW
    .then(fullfilled => {
        console.log(fullfilled, 'Yep!')
    })
    .catch(error => {
        // Nope, can't go
        console.log(error.message);
    })
}

// Chaining promises: 
// Promise 2
const letsGo = function (parks) {
    const message = `Sean is going to ${parks.first} and then ${parks.second}!!`;
    return Promise.resolve(message);
};

// call our promise chain...
const askSeanAgain = () => {
    willSeanGoToWDW 
    .then(letsGo)
    .then(fulfilled => console.log(fulfilled))
    .catch(error => console.log(error.message));
};

askSean();
askSeanAgain();