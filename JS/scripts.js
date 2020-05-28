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
function mushrooms() {
    var mushroom = 0;
    var addMushroom = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(mushroom);
}

function sausages() {
    var sausage = 0;
    var addsausage = document.getElementById("toppingone");
    if (addsausage.checked === true) {
        sausage = 140;
    }
    return parseInt(sausage);
}
function onions() {
    var onion = 0;
    var addonions = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        onion = 130;
    }
    return parseInt(onion);
}
function tikkaSaucee() {
    var tikkaSauce = 0;
    var addtikkaSauce = document.getElementById("toppingone");
    if (addtikkaSauce.checked === true) {
        tikkaSauce = 120;
    }
    return parseInt(tikkaSauce);
}
function mozarellaCheese() {
    var cheese = 0;
    var addmozarellaCheese = document.getElementById("toppingone");
    if (addmozarellaCheese.checked === true) {
        cheese = 110;
    }
    return parseInt(cheese);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getCostPerSize() + getCostPerCrust() + mushrooms()) * (getQuantity());

        console.log(totalPrice);
    alert("Your order of " + getQuantity() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

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
