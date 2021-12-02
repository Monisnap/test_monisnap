/**
 * @description Get the full partial alphabet according to the first and last letter of the serie 
 * @param {string} first First letter of the serie.
 * @param {string} last Last letter of the serie
 * @return {array} Array of all letters in the partial from first to last.
 */
const extractPartialString = (first, last) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const firstIndex = alphabet.indexOf(first);
    const lengthToSub = alphabet.indexOf(last) - firstIndex + 1;
    return alphabet.substr(firstIndex, lengthToSub).split('')
}

/**
 * @description Finds in a series of alphabeticaly ordered letters, those that have been forgotten.
 * @param {array} array The serie of letters.
 * @return {array} Array of missing letters in the serie.
 */
const findMissingLetter = (array) => {
    //in case we have uppercase letters we should convert them to lowercase.
    const lowerCaseArray = array.map(letter => {
        return letter.toLowerCase();
    })
    const firstLetter = lowerCaseArray[0].toLowerCase();
    const lastLetter = lowerCaseArray[lowerCaseArray.length - 1].toLowerCase();
    const partAlphabet = extractPartialString(firstLetter, lastLetter);
    return partAlphabet.filter(x => !lowerCaseArray.includes(x));
}