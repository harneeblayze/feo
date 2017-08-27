$(document).ready(function(){
    $(".1").fadeIn(4000, function(){
        $(".2").fadeIn(4000, function(){
            $(".3").fadeIn(4000);
        });
    });

    $(".next").click(function () {
        $(".1,.2,.3")
        .fadeOut(1000,function(){
            $(".4").fadeIn(4000, function () {
                $(".5").fadeIn(4000, function () {
                    $(".6").fadeIn(4000);
                    setTimeout(function() {
                        $(".next-parent").css({"top": "-400px", "opacity":"0"}).delay(2000).css("display", "none");
                        $(".loveMsg").delay(4000).fadeIn(3000);
                    }, 2000);
                });
            });
        });
    });
});