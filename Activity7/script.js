function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 =parseFloat (document.getElementById("num2").value);

    if (isNaN (num1)|| isNaN (num2)){
        document.getElementById("sum").innerHTML ="Please enter valid number.";
        return; 
    }

    const sum = num1 + num2;
    const diff = num1 - num2;
    const prod = num1 * num2;
    const qt = num1 / num2;
    const remain = num1 % num2;

    document.getElementById("sum").innerHTML = "The sum is: " + sum;
    document.getElementById("diff").innerHTML ="The difference is:  " + diff;
    document.getElementById("prod").innerHTML ="The product is:  " + prod;
    document.getElementById("qt").innerHTML ="The qoutient is:  " + qt;
    document.getElementById("remain").innerHTML ="The remainder is:  " + remain;

}
function clearFields(){
    document.getElementById("sum").innerHTML = "";
    document.getElementById("diff").innerHTML = "";
    document.getElementById("prod").innerHTML = "";
    document.getElementById("qt").innerHTML = "";
    document.getElementById("remain").innerHTML = "";
}
