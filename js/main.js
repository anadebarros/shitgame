$('#toggle:checkbox').click(function() {

    if ($(this).is(":checked"))
    {
        $("#donaldtrump").addClass("animate");
    }
    else {
        $("#donaldtrump").removeClass("animate");
    }
});