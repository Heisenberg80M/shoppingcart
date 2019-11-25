/*-- functions for shopping cart incrementor*/
/*-- Tafadzwa Nyazenga-->*/
/*-- 23/11/2019 -->*/

var  items = 0;
var itemsInCart = 0;

function additem() {
    items++;
    itemsInCart++;
    document.getElementById("items").innerHTML = items;
}

function removeitem() {
    if (items > 0) {
         --items;
        }
    document.getElementById("items").innerHTML = items;
}

function cancel() {
    document.getElementById("items").innerHTML = "0";
    items = 0;
    modal.style.display = "none";
}

function agree() {
    document.getElementById("quantity").innerHTML = itemsInCart;
    
    /*--Add requested items to cart--*/
    if(document.getElementById("colorModal")!="Please choose a color"){

        document.getElementById("addToCart").innerHTML = "Check out Now"; //only update if colour has been selected
        var i = 0;
        for (i = 0; i < items; i++) {
            
            var addedItem = document.createElement("Button"); //Create a button element
            var addedItemColor = "button-" + document.getElementById("color").innerHTML.toLowerCase().replace(" ", "-"); //fetch button class

            //add relevant classes to button
            addedItem.classList.add("inline-block"); 
            addedItem.classList.add("color-button");
            addedItem.classList.add(addedItemColor);

            
            document.getElementById("selections").appendChild(addedItem); //add Item to selections div in details 
    }
}
    /*-----------------------------------------------------------------------*/
    items = 0;
    modal.style.display = "none";

}

function updateCart(){
    document.querySelector("items").innerText = "0";
    document.getElementById("items").innerHTML = "0";
}

