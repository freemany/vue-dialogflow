
let callback, resolve;

const setCallback = (cb) => {
    callback = cb;
};

const getCallback = () => {
    return callback
};

const setResolve = (rsv) => {
    resolve = rsv;
};

const getResolve= () => {
    return resolve;
};

export {setCallback, getCallback, setResolve, getResolve};