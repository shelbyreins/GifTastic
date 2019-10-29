$(document).ready(function(){

// Make a array called with a variable topics
// Attach the GIF source 
// Ajax call the specific object
// Add the rating
// Generate new buttons from the search engine
//For loop to loop through 10 GIF's with ratings
// Append the GIF and the rating once the button is pressed

//https://api.giphy.com/v1/gifs/search?q=cats&limit=10&api_key=lWEJ1fgqWyR2Aj8W27Ojvzxt2i6OApp5

// add variable for these and onclick
//
// use data attributes
    // var still = gifDiv.dataset.still;
    // var animate = gifDiv.dataset.animate;
    // var state = gifDiv.dataset.state;
// for still image used fixed_height
// for animated image use fixed_height_still

   

    var topics = ["spinach", "carrot", "apple", "peppers", "brocilli", "peaches", "potatoes", "onion", "lime", "lemon", "letucce", "cilantro", "cabbage"];
    
    function displayGif(){  
        //event.preventDefault();
        var object= $(this).attr("data-object");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + object +"&limit=10&api_key=lWEJ1fgqWyR2Aj8W27Ojvzxt2i6OApp5";

        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        $("#gif-view").empty();
        
        var results = response.data;
        
        for (var i = 0; i < results.length; i++){ 
            var gifDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(gifImage);
            gifDiv.append(p);

            $("#gif-view").prepend(gifDiv);
        }
        
        });
    };

        function createButtons(){
            $("#button-view").empty();

            for(var i = 0; i < topics.length; i++){
            var newButton = $("<button>");
            newButton.addClass("btn");
            newButton.attr("data-object", topics[i])
            newButton.text(topics[i]);
            $("#button-view").append(newButton);
            }
        }
    

    $(document).on("click", ".btn", displayGif);
    createButtons();

});



