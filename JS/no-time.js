$( document ).ready(function() {
    $(".busy-work").hide();
});

$("#no-time").click(function() {
    if (screen.width >= 600) {
        $(".welcome").fadeOut("slow");
        $(".time-buttons").fadeOut("slow");
        $(".github").delay(1500).fadeOut("slow");
        $(".linkedin").delay(1000).fadeOut("slow");
        $(".home").delay(500).fadeOut("slow");
        $(".resume").delay(1200).fadeOut("slow");
        $(".busy-work").delay(3000).fadeIn("slow");
        $(".experiences").delay(4000).fadeIn();
        // Show detailed bubbles for each experience on hover
        $(".gentrification").mouseover(function() {
            $(".gentrification-exp").show();
        })
        $(".gentrification").mouseleave(function() {
            $(".gentrification-exp").hide();
        })
    }
});