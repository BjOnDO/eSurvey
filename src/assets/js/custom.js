jQuery(document).ready(function ($) {
    $("#header").hover(function () {
            $(this).fadeTo("slow", 1);
        
    },
        function () {
            if ($("#footer").hasClass("active") === false) {
                $(this).fadeTo("slow", 0);
            }
        });

    $(".contactUs").click(function () {
        $(".contactUs").css("color", "#34a58e");
        $("#contactSection").fadeToggle("slow", "linear", function () {

            if ($("#contactSection").css("display") === "block") {
                $(".contactUs").css("color", "#34a58e");
            }
            else {
                $(".contactUs").css("color", "");
            }});
    })
})
