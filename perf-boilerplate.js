const { performance } = require("perf_hooks");

const someFunction = () => {
    const startMilliSec = performance.now();

    // some code here

    const endMilliSec = performance.now();
    console.log("Running time (ms): " + (endMilliSec - startMilliSec));
}

someFunction();