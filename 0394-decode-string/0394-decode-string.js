/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
        let countStack = [];
    let stringStack = [];
    let curStr = '';
    let num = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            num = num * 10 + parseInt(char);
        } else if (char === '[') {
            countStack.push(num);
            stringStack.push(curStr);
            num = 0;
            curStr = '';
        } else if (char === ']') {
            let repeatTimes = countStack.pop();
            let prevStr = stringStack.pop();
            curStr = prevStr + curStr.repeat(repeatTimes);
        } else {
            curStr += char;
        }
            }

    return curStr;
    
};