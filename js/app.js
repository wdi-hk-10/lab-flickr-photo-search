// YOUR CODE HERE
$(document).ready(function (){
  var $images = $("#images");

  var getPhoto = function (){
    $.ajax({
      url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      method: "GET",
      data: {
        format: "json",
        tags: $(".form-control").val(),
        tagmode: $(".selectpicker").val(),
        link: "link"
      },
      dataType: 'jsonp',
      success: displayImages,
      error: function (response, status) {
        console.log(response);
      }
    });
  }

  function displayImages(data){
    var $row;
    data.items.forEach(function (item, index){
          // console.log(data.media.m);
        var $img = $("<img>").addClass("img-thumbnail").attr("src", item.media.m);
        if (index % 4 === 0) {
          $row = $('<div class="row">').appendTo($images);
        }
        var $col = $('<div class="col-lg-3">').appendTo($row);
        $col.append($img);
    });
  }


  var searchButton = function () {
    $("#search").on("click", function(){
      $("#images").empty();
      getPhoto();
    });
  }

  searchButton();
});