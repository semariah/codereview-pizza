//biz logic
function Pizza (topping, size){
  this.topping = topping;
  this.size = size;
  this.cost;
  this.numberTopping

}
function Customer (name, address){
  this.name = name;
  this.address = address;
  this.order = [];
  this.orderCost = 0;
}

Pizza.prototype.totalTopping = function(){
  this.numberTopping = this.topping.length;
}

Pizza.prototype.pizzaCost = function(){
  //var pizzaType = this.topping;
  if(this.size === "small"){
    this.cost = 10 + this.numberTopping;
  }else if (this.size === "medium"){
    this.cost =  12 + this.numberTopping;
  } else {
    this.cost = 14 + this.numberTopping;
  }
}





//user logic
$(document).ready(function(){
  $("#addpizza").click(function(){
    $("#more-pizza").append('<div class="new-pizza">' +
      '<div class="form-group">' +
        '<h4>Choose your desired sizes.</h4>' +
        '<input type="checkbox" name="sizes" value="small"> Small 10"<br>' +
        '<input type="checkbox" name="sizes" value="medium"> Medium 12"<br>' +
        '<input type="checkbox" name="sizes" value="large"> Large 14"<br>' +
      '</div><br>' +
      '<div id="topping" class="form-group">' +
        '<h4>Choose your favorite three toppings maximum from the list below</h4>' +
        '<input type="checkbox" name="toppings" value="mushrooms"> Mushrooms<br>' +
        '<input type="checkbox" name="toppings" value="pepperoni"> Pepperoni<br>' +
        '<input type="checkbox" name="toppings" value="spinach"> Spinach<br>' +
        '<input type="checkbox" name="toppings" value="pineapple"> Pineapple<br>' +
        '<input type="checkbox" name="toppings" value="chicken"> Chicken<br>' +
        '<input type="checkbox" name="toppings" value="artichoke"> Artichoke<br>' +
      '</div><hr>' +
    '</div>');
  });
  
  $("form#addressinfo").submit(function(event){
    event.preventDefault();
    $("#addressinfo").hide();
    var inputtedName = $("input#fullname").val();
    var inputtedAddress = $("input#fulladdress").val();
    var newCustomer = new Customer(inputtedName, inputtedAddress);

    $("form#pizza-type").submit(function(event){
      event.preventDefault();
      $("input:checkbox[name=size]:checked").each(function(){
        var sizeInches = $(this).val();
      });
      var toppingType = [];
      $("input:checkbox[name=topping]:checked").each(function(){
        var toppingInput = $(this).val();
        toppingType.push(toppingInput);
      });
      var newPizza = new Pizza(toppingType, sizeInches);
      newCustomer.order.push(newPizza);

      //call protypes
      newPizza.numberTopping();
      newPizza.pizzaCost();
      newCustomer.orderCost += newpizza.cost;

    });

    //output
    $("#output").show();
    $("#full-name").text(newCustomer.name);
    $("#full-address").text(newCustomer.address);
    for (var i = 0; i < newCustomer.order.length; i++){
      var i;
      $("#finall-order").append(newCustomer.order[i] + " pizza with " + newCustomer.order[i].numberTopping + " toppings." + '<br>');

    }
    $("#finall-order-price").text(newCustomer.orderCost);
    $(".more-pizza").text(""); //Clear additional pizza fields
    this.reset(); //Reset form

        //$("#reset").show();
        //$("#reset").click(funtion(){
          //location.reload();
        //})


  });
});
