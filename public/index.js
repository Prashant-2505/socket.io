// const wsbtn = document.getElementsByClassName('wsBtn')[0];

// wsbtn.addEventListener('click', () => {
//     const socket = io();
// });

const socket = io();
const sendBtn = document.getElementById('sendBtn');
const msgInput = document.getElementById('msgInput');
const receivedMsg = document.getElementById('recivedMsg');

sendBtn.addEventListener('click', (e) => {
    const message = msgInput.value
    socket.emit('user-message', message)
})


// how to get message from server ws
// it said if we get any info from server to client of names message
// then console log it
socket.on("message", (message) => {
     const p = document.createElement('p')
     p.innerText=message
     receivedMsg.appendChild(p)
})