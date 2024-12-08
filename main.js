onload = () =>{
    document.body.classList.remove("container");
};
// Show the message after a delay
setTimeout(function() {
    document.getElementById('message').style.display = 'block';
}, 5000); // Adjust the time as needed (5000ms = 5 seconds)
