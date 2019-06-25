const socket = io();

// socket.on('countUpdated', (count) => {
//     console.log(`The Count has been updated ${count}`)
// })

// Add the New Message Added to the DOM.
socket.on('message', (message) => {
    var para = document.createElement("p");
    var node = document.createTextNode(message);
    para.appendChild(node);
    
    var element = document.getElementById("messages");
    element.appendChild(para);
})

// document.querySelector('#increment').addEventListener('click', () => {
//     socket.emit('increment');
// })

document.querySelector('#sendButton').addEventListener('click', () => {
    let message = document.getElementById('userText').value;
    socket.emit('newMessage', message);
})