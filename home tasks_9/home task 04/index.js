


$("input").on("click", function () {
    let c = $("input:checkbox:checked").length
    if (c ===3 ) {
        $("input").attr("disabled", true);
    }


})



