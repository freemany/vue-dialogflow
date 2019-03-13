/**
 * generates new random UUID
 * @returns {string}
 */
const guid = () => {
    let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
        s4() + "-" + s4() + s4() + s4();
};

const getLast = (arr) => {
    if (arr.length === 0) {
        return arr;
    }
    return arr[arr.length - 1];
};

export {guid, getLast};