let message = "Hello, World";
console.log(message);

function respond_to_hello() {
    let input = document.getElementById("cmd").value;
    if(input == "hello") {
        console.log("hello");
    }
    if(input == "bye") {
        console.log("bye");
    }
}