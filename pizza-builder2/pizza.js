var Pizza = function(price){
    this.total_price = price 
}

$(document).on('ready', function() {

  var  pizza = new Pizza(21);

    function updatePriceTag() {
        $('strong').text(pizza.total_price + ' $') 
    }

    function updatePrice(e) {
        
        if ($(e.target).hasClass('active')) {
           
            if ($(e.target).hasClass('btn-pepperonni')) {
                  pizza.total_price -= 1;
                  $('pepperonni').hide();
                  $("aside.price ul li:contains('pepperonni')").hide();
           
            } else if ($(e.target).hasClass('btn-mushrooms')) {
                  pizza.total_price -= 1;
                  $('mushrooms').hide();
                  $("aside.price ul li:contains('mushrooms')").hide();

            } else if ($(e.target).hasClass('btn-green-peppers')) {
                    pizza.total_price -= 1;
                    $('green peppers').hide();
                  $("aside.price ul li:contains('green peppers')").hide();
            
            } else if ($(e.target).hasClass('btn-sauce')) {
                    pizza.total_price -= 3;
                    $('sauce').hide();
                     $("aside.price ul li:contains('sauce')").hide();
            
            } else {
                    pizza.total_price -= 5;
                    $('gluten-free crust').hide();
                    $("aside.price ul li:contains('gluten-free crust')").hide();
            }
       
        } else {
           
            if ($(e.target).hasClass('btn-pepperonni')) {
                  $('pepperonni').show();
                  pizza.total_price += 1;
                  $("aside.price ul li").show();
                  $("aside.price ul li:contains('pepperonni')").show();

            } else if ($(e.target).hasClass('btn-mushrooms')) {
                  $('mushrooms').show();
                  pizza.total_price += 1;
                  $("aside.price ul li").show();
                  $("aside.price ul li:contains('mushrooms')").show();


            } else if ($(e.target).hasClass('btn-green-peppers')) {
                    pizza.total_price += 1;
                    $('green peppers').show();
                     $("aside.price ul li").show();
                  $("aside.price ul li:contains('green peppers')").show();
            
            } else if ($(e.target).hasClass('btn-sauce')) {
                    pizza.total_price += 3;
                    $('sauce').show();
                    $("aside.price ul li").show();
                  $("aside.price ul li:contains('sauce')").show();
           
            } else {
                    pizza.total_price += 5;
                    $('gluten-free crust').show();
                    $("aside.price ul li").show();
                  $("aside.price ul li:contains('gluten-free crust')").show();
            }
        }
    }

    updatePriceTag();


    $('.btn-green-peppers').on('click', function() {
        updatePrice(event);
        updatePriceTag();
        $(this).toggleClass('active');
        $('#pizza section.green-pepper').toggle();
    });

    $('.btn-pepperonni').on('click', function() {
        updatePrice(event);
        updatePriceTag();
        $(this).toggleClass('active');
        $('#pizza section.pep').toggle();
    });

    $('.btn-mushrooms').on('click', function() {
        $(".mushrooms").toggle();
        updatePrice(event);
        updatePriceTag();
        $(this).toggleClass('active');
        $('#pizza section.mushroom').toggle();
    });

    $('.btn-crust').on('click', function() {
        updatePrice(event);
        updatePriceTag();
        $(this).toggleClass('active');
        $('#pizza section.crust section.cheese').toggle();
    });

    $('.btn-sauce').on('click', function() {
        updatePrice(event);
        updatePriceTag();
        $(this).toggleClass('active');
        $('#pizza section.crust section.sauce').toggle();
    });
});


