/*returns corresponding selected colour for the index and the modal*/
function chooseColor(color) {
    document.getElementById("color").innerHTML = color;
    document.getElementById("colorModal").innerHTML = color;
    document.getElementById("price").innerHTML = "$"+colorclasses[color].colorPriceGet;
    document.getElementById("full-price").innerHTML = "$"+colorclasses[color].colorFullPriceGet;
    document.getElementById("addToCart").innerHTML = "Add to Cart";
}