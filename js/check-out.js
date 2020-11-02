function showVNPay(){
    $("#form-vnpay").removeClass("hide");
    $("#btn-dat-vnpay").removeClass("hide");
    $("#btn-dat-tien").addClass("hide");
  }
  function amVNPay(){
    $("#form-vnpay").addClass("hide");
    $("#btn-dat-vnpay").addClass("hide");
    $("#btn-dat-tien").removeClass("hide");
  }


  const elementCarts = $(".checkout-product-ordered-list-item__item");

  for (let i = 0; i < elementCarts.length; i++) {
    const valueCart = $(elementCarts[i]).find(".checkout-product-ordered-list-item__header--price").html();
    console.log("Money :",valueCart);
    const amoutCart = $(elementCarts[i]).find(".checkout-product-ordered-list-item__header--amount").html();
    console.log("Amount :",amoutCart);
      var total = parseInt(valueCart) * parseInt(amoutCart);
      $(elementCarts[i]).find(".checkout-product-ordered-list-item__header--subtotal").html(total + " đ");
      console.log("Total Money :",total);
    }
  