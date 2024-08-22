// Question:
// Write a function debounce that takes another function fn and a delay in milliseconds, and 
// returns a new function that, when invoked, will only execute fn after the specified delay 
// has passed since the last invocation.

function logMessage(message) {
  console.log(message);
}

const debouncedLogMessage = debounce(logMessage, 1000);

// Example usage
debouncedLogMessage("Hello");
debouncedLogMessage("Hello again"); // Only this one will be logged after 1 second
