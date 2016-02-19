$(document).ready(function(){
  var $images = $('#images');
  var $tags = $('#search-panel > input.form-control');
  var $tagMode = $('#search-panel > .selectpicker');

  function getImages() {
    $.ajax({
      url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      data: {
        format: 'json',
        tags: $tags.val().split(/\s+/).join(','),
        tagmode: $tagMode.val()
      },
      dataType: 'jsonp',
      success: displayImages,
      error: function(response, status) {
        console.log(response);
      }
    });
  }

  function displayImages(data){
    $images.empty();
    var $row;
    data.items.forEach(function(item, index){
      var $img = $('<img>').attr('src', item.media.m).addClass('thumbnail');
      if (index % 4 === 0) {
        $row = $('<div class="row">').appendTo($images);
      }
      var $col = $('<div class="col-lg-3">').appendTo($row);
      $col.append($img);

      $img.data('title', item.title);
      $img.data('author', item.author);
      $img.data('published', item.published);
      $img.data('tags', item.tags);
      $img.data('img', item.media.m);
    });

    $('img.thumbnail').on('click', function() {
      var $selected = $(this);
      var $img = $('<img>').attr('src', $selected.data('img'));
      var $details = $('#modal-photo-details');

      $('.modal-title').text($(this).data('title'));
      $('#modal-thumbnail').empty().append($img);
      $details.find('div:eq(0)').text($selected.data('author'));
      $details.find('div:eq(1)').text($selected.data('published'));
      $details.find('div:eq(2)').text($selected.data('tags'));
      $('#photo-details').modal('show');
    }); 
  }

  function bindSearchButton() {
    $('#search').on('click', getImages);
  }

  bindSearchButton();
});