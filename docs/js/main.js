let message = "Hello, World";
console.log(message);

function respond_to_hello() {
    let input = document.getElementById("cmd").value;
    if(input == "hello") {
        document.getElementById("output").innerHTML = "hello";
    }
    if(input == "bye") {
        document.getElementById("output").innerHTML = "bye";
    }
}