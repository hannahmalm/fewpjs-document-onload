// Your code goes here
// . Use the event's callback function to target the paragraph element with id="text" 
// and replace the text with "This is really cool!"

document.addEventListener("DOMContentLoaded", function() {
    // console.log("The DOM has loaded");
    const p = document.getElementById('text')
    p.innerHTML = "This is really cool!"

  });