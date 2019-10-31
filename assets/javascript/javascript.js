$(document).ready(function(){
    
    var topics = ["Spinach", "Carrot", "Apple", "Peppers", "Broccoli", "Peaches", "Potatoes", "Onion", "Lime", "Lemon", "Lettuce", "Cilantro", "Cabbage"];
    
    function displayGif(event){  
        event.preventDefault();
        var object= $(this).attr("data-object");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + object +"&limit=15&api_key=lWEJ1fgqWyR2Aj8W27Ojvzxt2i6OApp5";

        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(queryURL);
        console.log(response);

        $("#gif-view").empty();
        
        var results = response.data;
        
        for (var i = 0; i < results.length; i++){ 
            var gifDiv = $("<div class='image-container'>");
            var p = $("<p class= 'rating'>").text("Rating: " + results[i].rating);
            
            var gifImage = $("<img>");

            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.attr("data-still",results[i].images.fixed_height_still.url);
            gifImage.attr("data-animate",results[i].images.fixed_height.url);
            gifImage.attr("data-state", "still");
            gifImage.attr("class","gifImage");
    
            
            gifDiv.append(gifImage);
            gifDiv.append(p);

            $("#gif-view").prepend(gifDiv);
        }

             $(".gifImage").on("click",function(){
            
       
             var gifState = $(this).attr("data-state");

             if(gifState === "still"){
                 $(this).attr("src", $(this).attr("data-animate"));
                 $(this).attr("data-state", "animate");
            }else{
                 $(this).attr("src", $(this).attr("data-still"));
                 $(this).attr("data-state", "still");
             }
             console.log(this);
             })
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
        
        $("#add-gif").on("click", function(event){
            event.preventDefault();
            var object = $("#gif-input").val().trim();
            topics.push(object);
            createButtons();
        })

    $(document).on("click", ".btn", displayGif);
    createButtons();

});



