// 
$(document).ready(function(){
    $("#description").hide();
    $("#about").hide();
    $("#development-image").hide();

    
$("#design,#description").click(function(){
    $("#description").toggle();
    $("#design").toggle();
});
$("#development,#about").click(function(){
    $("#about").toggle();
    $("#development").toggle();
});
$("#product,#services").click(function(){
    $("#services").toggle();
    $("#product").toggle();
});

$(".project").hover(function(){
    $(this).animate({opacity: '1'});
},
function(){
    $(this).animate({opacity: '0'}); 
});
});
// $("#imag1").hover (function(){
//     $("#textA").toggle("slow");
// })
// $("#imag2").hover(function(){
//     $("#textB").toggle("slow");
// })