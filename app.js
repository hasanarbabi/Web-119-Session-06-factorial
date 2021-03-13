function factorial(x) {
    if(x == 0) {
        return 1;
    } else if(x < 0){
        return "Enter non negative number";
    } else if(x != Math.floor(x)) {
        return "Enter an integer number"
    } else {
        return x * factorial(x - 1);
    }
}

function submit() {
    if(document.getElementById("in").value > 0){
        document.getElementById("out").value = factorial(document.getElementById("in").value);
    }
}

document.getElementById("calc").onclick = submit;
