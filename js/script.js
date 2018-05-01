$(document).ready(function() {

    $("#searchButton").click(function() {
        console.log("Button Click");
        var searchTerm = $('#input').val();
        search(searchTerm);
    });

    function search(searchTerm) {
        // STEP 2: build the searchUrl
        var apiKey = '5aa8e389ba4e24b6106af5159ab3e344';
        var searchUrl = 'https://api.soundcloud.com/tracks?q=' + searchTerm + '&client_id=' + apiKey;

        $('#input').attr('href', searchUrl);

        $.ajax({
            url: searchUrl,
            method: 'GET',
            success: function(response) {
                console.log(response);
                ShowResults(response);
            }
        });
    }


    function ShowResults(results) {
        $("#results").empty();
        results.forEach(function(data) {
            var li="<li><p>"+ data.title +"</p><img src= "+ data.artwork_url +"></li>";
           $("#results").append(li);
        });
    }
});
