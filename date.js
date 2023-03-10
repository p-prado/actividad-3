// Returns a date formated as: Monday, January 30
function getDate () {
    const today = new Date();
    const dateOptions = {
        weekday: 'long',
        /*year: 'numeric',*/
        month: 'long',
        day: 'numeric'
    };
    return today.toLocaleDateString("en-US", dateOptions);
}

// // Returns a the day of the week: Monday
// exports.getDay = function () {
//     const today = new Date();
//     const dateOptions = {
//         weekday: 'long',
//     };
//     return today.toLocaleDateString("en-US", dateOptions);
// }

function logDate() {
    const today = new Date();
    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }
    
    console.log(today.toLocaleDateString("en-US", dateOptions));
    console.log(today.getTime());
}

logDate();