// TASK 1
$("a").attr("target", "_blank");


// TASK 2
$(".head").css("background-color", "green");
$(".inner").css("font-size", "35px")


// TASK 3
$("div:contains('text1')").insertBefore("h3:contains('header1')");
$("div:contains('text2')").insertBefore("h3:contains('header2')");


// TASK 4
$("#checkboxes").change(function () {
    let arr = [];
    let i = 0;

    $("input#checkbox:checked").each(function () {
        arr.push($(this).val());
        i++;
        if (i >= 3) {
            $("input#checkbox").attr("disabled", true);
        } else {
            $("input#checkbox").removeAttr("disabled");
        }
    });
});
