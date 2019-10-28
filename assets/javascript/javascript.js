$(document).ready(function(){
// Make a array called with a variable topics
// Attach the GIF source 
// Ajax call the specific object
// Add the rating
// Generate new buttons from the search engine
// Append the GIF and the rating once the button is pressed

//https://api.giphy.com/v1/gifs/search?q=cats&limit=10&api_key=lWEJ1fgqWyR2Aj8W27Ojvzxt2i6OApp5
// for still image used fixed_height
// for animated image use fixed_height_still
// add variable for these and onclick
// use data attributes

   

    var topics = ["spinach", "carrot", "apple", "peppers", "brocilli", "peaches", "potatoes", "onion", "lime", "lemon", "letucce", "cilantro", "cabbage"];
    
    function displayGif(){
        var object= $(this).attr("data-object");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + object +"&limit=10&api_key=lWEJ1fgqWyR2Aj8W27Ojvzxt2i6OApp5";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var gifDiv = $("<div class='gif'>");
            console.log(response)

        })

    }














});


