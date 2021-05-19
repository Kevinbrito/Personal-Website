$("#continueButton").click(function() {
    if (screen.width >= 600) {
        $("#continueButton").fadeOut("slow");
        $(".logo-black").delay(1000).fadeOut();
        $(".logo-white").delay(2000).fadeOut();
        $(".logo").delay(3000).fadeOut();
        $("#black-logo").delay(2000).fadeIn();
        $("#black-logo").delay(3000).animate({
            top: '10%',
            left: '20%',
        });
        $("#white-logo").delay(3000).fadeIn();
        $("#white-logo").delay(3500).animate({
            top: '10%',
            left: '80%'
        });
        $("#blue-logo").delay(4000).fadeIn();
        $("#blue-logo").delay(4000).animate({
            top: '75%',
        });
        $(".typeText").delay(4000).fadeIn();

        $("#black-logo").mouseover(function() {
            $(".circle").show();
            $(".circle").css("background-color", "#033dfc");
            $(".circle1").show();
            $(".circle1").css("background-color", "#8a1ee8");
            $(".circle2").show();
            $(".circle2").css("background-color", "#571ee8");
            //expand with color of circle 3
            $(".circle3").show();
            $(".circle3").css("background-color", "#e44ef5");
            
        });
        $("#black-logo").mouseleave(function() {
            $(".circle").hide();
            $(".circle1").hide();
            $(".circle2").hide();
            $(".circle3").hide();
        });

        $("#blue-logo").mouseover(function() {
            $(".circle").show();
            $(".circle").css("background-color", "#E0FF89");
            $(".circle1").show();
            $(".circle1").css("background-color", "#BFFF3C");
            $(".circle2").show();
            $(".circle2").css("background-color", "#9AFF40");
            $(".circle3").show();
            $(".circle3").css("background-color", "#81DF2F");
            
        });
        $("#blue-logo").mouseleave(function() {
            $(".circle").hide();
            $(".circle1").hide();
            $(".circle2").hide();
            $(".circle3").hide();
        });

        $("#white-logo").mouseover(function() {
            $(".circle").show();
            $(".circle").css("background-color", "#B844DB");
            $(".circle1").show();
            $(".circle1").css("background-color", "#FFFFFF");
            $(".circle2").show();
            $(".circle2").css("background-color", "#CC33CC");
            $(".circle3").show();
            $(".circle3").css("background-color", "#84D7FF");
            
        });
        $("#white-logo").mouseleave(function() {
            $(".circle").hide();
            $(".circle1").hide();
            $(".circle2").hide();
            $(".circle3").hide();
        });
    };

    if (screen.width < 600) {
        $("#continueButton").fadeOut("slow");
        // Moving logos to new location
        $(".logo-black").delay(1000).animate({
            top: '40%',
            left: '15%',
        });
        $(".logo-white").delay(2000).animate({
            top: '40%',
            left: '45%',
        });
        $(".logo").delay(3000).animate({
            top: '51%',
            left: '30%',
        });
    }
});