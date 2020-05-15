let currentProgress = 0;

$('#onePercent').click(function() {
    currentProgress = currentProgress + 1;
    $('#myProgress').attr("style", "width: " + currentProgress + "%");
});

$('#threePersent').click(function() {
    currentProgress = currentProgress + 3;
    $('#myProgress').attr("style", "width: " + currentProgress + "%");
});

$('#sevenPersent').click(function() {
    currentProgress = currentProgress + 7;
    $('#myProgress').attr("style", "width: " + currentProgress + "%");
});
