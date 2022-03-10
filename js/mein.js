
let aboutOffset= $("#About").offset().top;
$(window).scroll(function(){
    let wScroll= $(window).scrollTop();
    if(wScroll > aboutOffset-50 ){
        $("#naveChange").css("backgroundColor","rgb(153, 153, 153)");
        $("#btnUp").fadeIn(500)
    }
    else{
        $("#naveChange").css("backgroundColor","transparent");
        $("#btnUp").fadeOut(500)
    }
})

$("a[href^='#']").click(function(e){
    let aHref =$(e.target).attr('href');
    let sectionOffset =$(aHref).offset().top;

    $("html , body").animate({scrollTop:sectionOffset} , 2000);

});

// let iconColor=document.getElementsByClassName("icon-color");
// iconColor.addEventListener("click" ,function(){
//     $
// })


$(document).ready(function(){
    $("#loading .spinner").fadeOut(1000 ,function(){
        $("#loading").fadeOut(1000 , function(){
            $("body").css("overflow-y" , "auto")
        })
    })
})

