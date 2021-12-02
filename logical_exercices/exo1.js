/**
 * @description Determine if a given big number contain all digits from 0 to 10 at least once.
 * To deal with big numbers (higher than 2^53) with native javascript without using external 
 * library big number arg should end with n, otherwise our number will be converted in scientific 
 * format, for example we should call our function like this if arg is a very big 
 * number: checkAllDigit(654021326547896541230215417896523124n).
 * @param {number} bigNumber The number we should check.
 * @return {boolean} true|false if number contain every digit at least once.
 */
const checkAllDigit = (bigNumber) => {
    const numberToArray = bigNumber.toString().split('');
    return ("0123456789").split('').every(d => numberToArray.includes(d))
}