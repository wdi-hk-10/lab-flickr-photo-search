$(document).ready(function () {

  var getPhotos = function () {

    var tagmode = $('.filter-option').text();
    var tags    = $('.form-control').val().split(/[ ,]+/).toString();

    $('#images').empty();

    $.ajax({
      url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      method: "GET",
      data: {
        format: "json",
        tags: tags,
        tagmode: tagmode,
      },
      dataType: 'jsonp',
      success: function (response, status) {

        response.items.forEach(function (elem, index) {

          var createImg =
            '<div class="col-xs-3 thumbnail">' +
              '<img src="'+ elem.media.m +'">' +
            '</div>';

          var createRow =
            '<div class="row"></div>';

          if (index % 4 === 0) {
            $('#images').append(createRow);
          }

          $('#images > .row:last').append(createImg);

        });
      },
      error: function (response, status) {
        console.log(response);
      }
    });
  };

  var bindGetPhotos = function () {
    $('#search').off().on('click', getPhotos)
  };

  var init = function () {
    bindGetPhotos();
  };

  init();

});