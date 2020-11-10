(function() {

    var products = [{
        name: "Zoo York",
        image: "skate1.webp",
        price: "75.50"
    }, {
        name: "Complete 100",
        image: "skate2.webp",
        price: "82.50"
    }];

    var state = {
        orderItems: []
    };

    let item = state.orderItems.find(p=>p.id == id);
            if (!item) {
                item = {
                    id: id,
                    item: products[id],
                    num: 0
                };
                state.orderItems.push(item);
            }
            item.num++;

    document.onload = function(){
        for (let i in products) {
            $(`<div class="col col-xs-12 col-md-6 col-lg-4"> 
            <div> 
                <img src="Products/${products[i].image}"> 
            </div> 
            <h2 class="name">${products[i].name}</h2> 
            <p class="price">${products[i].price}</p>
        </div>`).appendTo($("#products"));
        };
    };

});
