var items = Array();
var getCartItems = function() {
    var url = "http://ewhiting.eastus.cloudapp.azure.com/midterm/Classes/AppUser/get_cart.php/?user=1";
    $.get(url, function(data) {
        var receipt = data.receipt;
        var items = data.items;
        items.forEach(function (item) {
            var item = new Item(item);
            items.push(item);
        })
    })
}

class Item {
    constructor(item) {
        this.movie_name = item.movie;
        this.price = item.price;
    }
}

class Receipt {
    constructor(receipt) {
        this.subtotal = receipt.subtotal;
        this.cart_count = receipt.cart_count;
        this.tax = receipt.tax;
        this.total = receipt.total;
    }
}