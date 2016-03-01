// YOUR CODE HERE

$(document).ready(function(){
  var $searchButton = $('#search');

  // Listeners
  $searchButton.on('click',function(e){
    e.preventDefault();
    console.log ('listened');
    $('#images').html('');
    searchButtonFunction();
  })

  // Functions

  var searchButtonFunction = function (){

    $.ajax({
      url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      data: {
        // YOUR DATA
        format: "json",
        tags: $('input').val(),
        tagmode: $('.selectpicker').val()
      },
      dataType: 'jsonp',
      method: "GET",

      success: function(response,status){ // YOUR CALLBACK
        console.log(status);
        console.log(response);
        response.items.forEach(function (elem, i) {
          var imgSrc = response.items[i].media.m;
          console.log(response.items);
          var htmlInput = '<div class = "col-md-4"><img src ='+imgSrc+' data-toggle="modal" data-id="'+i+'" data-target="#photoModal" class="img-thumbnail photograph"></img></div>';
          $('#images').append(htmlInput);
        })
        $('.photograph').on('click', function(e, num) {
          var photoID= $(this).data('id');
          console.log(photoID)
          var photoInfo = response.items[photoID];
          console.log(photoInfo);
          $('h4').html(photoInfo.title);
          $('#photoTags').html(photoInfo.tags);
          $('#photoDescription').html(photoInfo.description);

        });
      },
      error: function(response,status) {
      // YOUR CALLBACK
        console.log(response);
        console.log(status);
      }
    });

  }

});