/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        chars[write] = char;
        write++;

        if (count > 1) {
            const str = count.toString();
            for (let digit of str) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write;
};
    