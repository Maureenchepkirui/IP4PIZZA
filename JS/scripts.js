var total,crust_cost,size_cost;

function getCostPerSize() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCostPerCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getQuantity() {
    var selectedNumber = document.getElementById("numberofpizza").value;
    return parseInt(selectedNumber);
}
function getType() {
    var selectedType = document.getElementById("type").value;
    return parseInt(selectedType);
}
function toppingss() {
    var mushroom = 0;
    var addMushroom = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(mushroom);
}


function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getCostPerSize() + getCostPerCrust() + toppingss()) * (getQuantity());

        console.log(totalPrice);
    alert("Dear customer you have ordered an amount of " + getQuantity() +  " pizzas and the amount you owe us is " + totalPrice +"." )

}



// option for delivery//



$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hey!" + name + ". Tam Tam Pizza has received your order and it will soon be delivered to you at " +  location + " within one hour.Delivery will cost an extra sh 200 payable on arrivel.Thank you for choosing us.");
        // $(this).get(0).reset();
        //  event.preventDefault();
    });

});
// cart//
$(document).ready(function () {
    $("#pizzainfo").submit(function () {

        var type = $("optiont#type").val();
        var quantity = $("input#number").val();
        var crust = $("optiont#crust").val();
        var topping = $("option#toppingone").val();
        append("This is the summary of your order" + type + crust + yy)


    });

});
