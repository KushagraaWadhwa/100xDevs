/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(ms) {
    return new Promise((resolve) => {
        const start = Date.now();
        while (Date.now() - start < ms) {   // the loop keeps on waiting till it reaches the specified milliseconds that is it stays busy during that time and the JS thread is not passed anywhere else
        }
        resolve();
    });
}

module.exports = sleep;
