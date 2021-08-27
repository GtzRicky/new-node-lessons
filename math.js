export const sum = (a, b) => {
    return a + b;
};

const res = (a, b) => {
    return a - b;
}

// export const checkInteger = (value) => {
//     if(value % 1 === 0){
//         return true;
//     }
//     return false;
// }

export const checkInteger = (value) => {
    return Number.isInteger(value);
}

export const twoNumbers = (a, b) => {
    if( a > b || a === b) {
        return a * b;
    }
    if( a < b) {
        return a / b;
    }
};

export default res;
