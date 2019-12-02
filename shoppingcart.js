/*-- functions for shopping cart incrementor*/
/*-- Tafadzwa Nyazenga-->*/
/*-- 23/11/2019 -->*/

var items = 0;
var itemsInCart = 0;
var buttonsInCart = "";
let colorclasses;
let total;


// Color class with the associated attributes and methods (getters and setters)
class Color {
    constructor(price, color) {
        this.colorID = color;
        this.quantity = 0;
        this.colorPrice = price;
    }
    
    set quantitySet(amount) {
        this.quantity = amount;
    }
    get quantityGet() {
        return this.quantity;
    }
    get colorPriceGet() {
        return this.colorPrice;
    }

    get colorFullPriceGet() {
        return (this.colorPrice*1.25).toFixed(2);
    }

    get button() {
        let btnName = this.colorID.toLowerCase().replace(" ","-");
        return "<button class='inline-block color-button button-" + btnName + "' onclick=colorSelect('" + this.colorID + "');></button>";
        //var addedItem = document.createElement("Button"); //Create a button element
        //var addedItemColor = "button-" + colorID.innerHTML.toLowerCase().replace(" ", "-"); //fetch button class

        /*add relevant classes to button
        addedItem.classList.add("inline-block"); 
        addedItem.classList.add("color-button");
        addedItem.classList.add(addedItemColor);
    
        return addedItem;*/
    }
}

// Color tracking variables
var colors = ["Red", "Violet", "Black", "White", "Orange", "Yellow", "Navy Blue", "Turquoise", "Beige", "Sky Blue", "Lime Green", "Pink", "Cream", "Emerald Green", "Dark Grey", "Brown", "Aqua Marine", "Light Grey"];
 
function createColorClasses(){
    colorclasses={"Red": new Color(14.99,"Red"), 
                "Violet": new Color(12.95, "Violet"), 
                "Black": new Color(17.95, "Black"), 
                "White": new Color(16.95, "White"),
                "Orange": new Color(15.95, "Orange"),
                "Yellow": new Color(10.95, "Yellow"),
                "Navy Blue": new Color(12.95, "Navy Blue"), 
                "Turquoise": new Color(13.95, "Turquoise"), 
                "Beige": new Color(11.95, "Beige"), 
                "Sky Blue": new Color(16.95, "Sky Blue"),
                "Lime Green": new Color(11.95, "Lime Green"),
                "Pink": new Color(17.95, "Pink"),
                "Cream": new Color(14.95, "Cream"),
                "Emerald Green": new Color(16.95, "Emerald Green"),
                "Dark Grey": new Color(19.45, "Dark Grey"),
                "Brown": new Color(11.95, "Dark Grey"),
                "Aqua Marine": new Color(9.95, "Aqua Marine"),
                "Light Grey": new Color(12.95, "Light Grey"),
        }
}

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
    /*--Add requested items to cart--*/
    if(document.getElementById("colorModal")!="Please choose a color"){

        
        document.getElementById("addToCart").innerHTML = "Check out Now"; //only update if colour has been selected
        document.querySelector("#addToCart").dataset.target = "#myCheckoutModal";
        
        let c = document.getElementById("colorModal").innerHTML;
        colorclasses[c].quantitySet = items;
        //document.getElementById("selections").appendChild(colorclasses[c].button);

        var i = 0;
        total = 0;
        var dicountedTotal = 0;
        for (const a of colors) {
            if(colorclasses[a].quantityGet!=0){
                for(i=1; i<=colorclasses[a].quantityGet; i++){
            
                    //var addedItem1 = colorclasses[item].button; //Create a button element
                    /*var addedItemColor = "button-" + document.getElementById("color").innerHTML.toLowerCase().replace(" ", "-"); //fetch button class

                    //add relevant classes to button
                    addedItem.classList.add("inline-block"); 
                    addedItem.classList.add("color-button");
                    addedItem.classList.add(addedItemColor);*/

                    
                    //document.getElementById("selections").appendChild(addedItem1);

                    buttonsInCart += colorclasses[a].button;
                    dicountedTotal += colorclasses[a].colorPriceGet;
                    total += colorclasses[a].colorFullPriceGet;
                }
            }
        }
    
    }
    /*-----------------------------------------------------------------------*/
    
    
    document.querySelector("#selections").innerHTML=buttonsInCart;
    buttonsInCart ="";

    var element = document.getElementById("selections");
    var numberOfChildren = element.getElementsByTagName('*').length;

    document.getElementById("quantity").innerHTML = numberOfChildren;
    document.querySelector("#items").innerText = "0";

    document.getElementById("price").innerHTML = "$"+dicountedTotal.toFixed(2);
    document.getElementById("full-price").innerHTML = "$"+(dicountedTotal*1.25).toFixed(2);

    items = 0;
    modal.style.display = "none";

}

function updateCart(){

    if(document.getElementById("colorModal")!="Please choose a color"){
        document.getElementById("items").innerHTML = "0";
    }
    else{
        document.getElementById("items").innerHTML = colorclasses[document.getElementById("colorModal")].quantityGet;
        document.getElementById("selections").appendChild(document.getElementById("colorModal"));
    }
    //let c = document.getElementById("colorModal").innerHTML;
    
    //document.getElementById("items").innerHTML = "0";
}


