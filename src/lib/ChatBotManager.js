// const ChatBotManager = (() => {
//     let callback;
//
//     const setCallback = (cb) => {
//         callback = cb;
//     }
//
//     const getCallback = () => {
//         return callback;
//     }
//
//     return {
//         setCallback,
//         getCallback,
//     }
// })();
let callback;

const setCallback = (cb) => {
    callback = cb;
};

const getCallback = () => {
    return callback;
};


export {setCallback, getCallback};