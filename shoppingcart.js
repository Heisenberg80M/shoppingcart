/*-- functions for shopping cart incrementor*/
/*-- Tafadzwa Nyazenga-->*/
/*-- 23/11/2019 -->*/

var  items = 0;


/*increments the cart items when + button is pressed*/
function additem() {
    items++;
    document.getElementById("itemst").innerHTML = items;
}

/*decrements the cart items when - button is pressed*/
function removeitem() {
    items = items < 1 ? 0 : --items;
    document.getElementById("items").innerHTML = items;
}

/*closes popup modal and resets items to zero when cancel button is pressed*/
function cancel() {
    items = 0;
    document.getElementById("items").innerHTML = items;
    modal.style.display = "none";
}
/*closes popup modal, proceeds to checkout and shows details of selected items */
function agree() {
    document.getElementById("quantityBtn").innerHTML = items;
    document.getElementById("addToCartBtn").innerHTML = "Check out Now";
    /*-----------------------------------------------------------------------*/
    /*--Add details--*/
    var i = 0;
    for (i = 0; i < items; i++) {
        /*Create element creates whatever is in <>*/
        var newBtn = document.createElement("Button");
        /*Add a class defined in css*/
        newBtn.classList.add("color-button");
        /*Generate the button colour class. class names are '-' delimited (no spaces) and are in all small letters, which shouldn't matter since javascript but don't care to experiment further*/
        var btnColor = "button-" + document.getElementById("color").innerHTML;
        btnColor = btnColor.toLowerCase().replace(" ", "-");
        newBtn.classList.add(btnColor);
        /*Add the newly created element to our detail division.*/
        document.getElementById("selections").appendChild(newBtn);
    }
    /*-----------------------------------------------------------------------*/
    items = 0;
    modal.style.display = "none";

}