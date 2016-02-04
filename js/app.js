// YOUR CODE HERE
$(document).ready(function (){

  var getPhoto = function (){
    $.ajax({
      url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      method: "GET",
      data: {
        format: "json",
        tags: $(".form-control").val(),
        tagmode: $(".btn dropdown-toggle btn-default").val(),
        link: "link"
      },
      dataType: 'jsonp',
      success: function (response, status) {
        console.log(response);
        // console.log(response.items);
        var object = response.items;
        var newImages = object.forEach(function (data){
          // console.log(data.media.m);
          $("<img>").attr("src", data.media.m).appendTo($("#images"));
        });
      },
      error: function (response, status) {
        console.log(response);
      }
    });
  };

  var searchButton = function () {
    $("#search").on("click", function(){
      $("#images").empty();
      getPhoto();
    });
  }

  searchButton();
});