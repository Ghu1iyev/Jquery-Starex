$(document).ready(function () {
  $(".query1").click(function () {
    $(".text1").slideToggle(1000);
    $(".text2").hide(1000);
    $(".text3").hide(1000);
  });
  $(".query2").click(function () {
    $(".text2").slideToggle(1000);
    $(".text1").hide(1000);
    $(".text3").hide(1000);
  });

  $(".query3").click(function () {
    $(".text3").slideToggle(1000);
    $(".text1").hide(1000);
    $(".text2").hide(1000);
  });


  $(".bQuery1").click(function () {
    $(".bText1").slideToggle(1000);
    $(".bText2").hide(1000);
  });
  $(".bQuery2").click(function () {
    $(".bText2").slideToggle(1000);
    $(".bText1").hide(1000);
  });

  $(".cQuery1").click(function () {
    $(".cText1").slideToggle(1000);
    $(".cText2").hide(1000)
  });
  $(".cQuery2").click(function () {
    $(".cText2").slideToggle(1000);
    $(".cText1").hide(1000)

  });

  $(".btn1").click(function () {
    $(".box1").show();
    $(".box2").hide();
    $(".box3").hide();

    $("btn1").attr("borderbtn")
  });


  $(".btn2").click(function () {
    $(".box1").hide();
    $(".box3").hide();
    $(".box2").show();
  });

    
  $(".btn3").click(function () {
    $(".box1").hide();
    $(".box3").show();
    $(".box2").hide();
  });




});
