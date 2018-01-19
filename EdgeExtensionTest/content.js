
window.addEventListener("message", function (event) {
    console.log("Inside content script. message_type= " + event.data.message_type);
}, false);

