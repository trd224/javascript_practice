Question:
Write a function throttle that takes another function fn and a limit in milliseconds. The function should return a new function that only allows fn to be called at most once every limit milliseconds.
function logMessage(message) {
  console.log(message);
}

const throttledLogMessage = throttle(logMessage, 1000);

// Example usage
throttledLogMessage("Message 1");
throttledLogMessage("Message 2"); // This will be ignored if called within 1 second of the first
