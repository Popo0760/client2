$(function(){
    var isEmpty = $("#is-empty").val();
    if(isEmpty == ""){
        $("#list-order").addClass("hide");
        $("#none-order").removeClass("hide");
    }else{
        $("#list-order").removeClass("hide");
        $("#none-order").addClass("hide");
    }
})