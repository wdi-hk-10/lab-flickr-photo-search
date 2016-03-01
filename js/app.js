// YOUR CODE HERE
$(document).ready(function () {

  // search flickr public photos based on 'tags' and 'tag mode' provided by users
  // display the photos in a 4 x 5 grid (at most 20 photos)
  var button = function () {
    $('#search').on("click", function (e) {
      e.preventDefault();
      $('#images').empty();
      getPhoto();

    });
  };

  var getPhoto = function () {
    $.ajax({
      url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      method: "GET",
      data: {
        format: 'json',
        // YOUR DATA
        tags: $('.form-control').val(),
        tagmode: $('.selectpicker').val()
      },
      dataType: 'jsonp',
      success: function (response, status) {
        console.log(response);
        console.log(status);
        response.items.forEach(function (elem) {
          var newPhoto= '<div class="col-xs-3"> <img class="img-thumbnail" src=' + elem.media.m + '> </div>'
          $('#images').append(newPhoto);
        });
      },
      error: function (response, status) {
        console.log(response);
        console.log(status);
      }
    });
  };

  var init = function () {
    button();
  };

  init();

});