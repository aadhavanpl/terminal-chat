let message = "Hello, World";
console.log(message);

function respond() {
    let input = document.getElementById("cmd").value;
    if(input =="help") {
        help();
    }
    else if(input == "hello") {
        document.getElementById("output").innerHTML = "hello";
    }
    else if(input == "bye") {
        document.getElementById("output").innerHTML = "bye";
    }
    else {
        document.getElementById("output").innerHTML = "command not found";
    }
    document.getElementById("cmd").value = ""; //to clear value in input 
}

function help() {
    var commands = `hello\n
    bye`;
    document.getElementById("output").innerHTML = commands;
    
}