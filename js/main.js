
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".close").on('click',(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
}))

$("#leftMenu a").click(function(){
    var sectionId= $(this).attr("href");
    var position = $(sectionId).offset().top;
    $("html , body").animate({scrollTop:position},2000);
})

$('#sliderDown .t').click(function(){
    $('.in').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


var Length = 100;
$('textarea').keyup(function() {
  var areaText = $(this).val().length;
  var Left = Length-areaText;
  if(Left<=0)
            {
                 $(".remain").text("your available character finished");
            }
        else{
        $(".remain").text(Left);
        }
});



