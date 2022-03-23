$(document).ready(function () {
    const size = $(".pop").css("fontSize");
    $("#pop").hover(function () {
        $(".pop").css("fontSize", "150%");
    },
    function () {
        $(".pop").css("fontSize", size);
    });
});