let message = "Hello, World";
console.log(message);

function respond_to_hello() {
    let input = document.getElementById("ccard-input").value;
    if(input == "hello") {
        document.getElementById("output").innerHTML = "bye";
    }
}