// Func for emulation of the timeout
const timeout = (delay) => new Promise((res) => setTimeout(res, delay));

// Example of usage:
const fakeApiCall = async () => {
    await timeout(5000);
    // Do smth after delay... 
  }