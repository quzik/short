// Worker.js
onmessage = function(event) {
  console.log('Message received from main thread:', event.data);

  // Perform background task
  const result = `Worker says: ${event.data}`;
  
  // Send a message back to the main thread
  postMessage(result);
};
