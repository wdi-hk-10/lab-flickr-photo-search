$(document).ready(function(){

function emptyScreen(){
  $("#images1").empty();
  $("#images2").empty();
  $("#images3").empty();
  $("#images4").empty();
  $("#images5").empty();
}

function addImages(response) {
  var counter = 1;
  var row = 0;
  response.items.forEach(function(elem){
    var newImg = "<div class= \"col-xs-3\" data-author="+elem.author+" data-title="+elem.title+" data-date="+elem.date_taken+" data-tags="+elem.tags+"><img class=\"thumbnail\" src="+elem.media.m+"></img></div>";
    if(counter%4===0) {
      row=row+1;
    }
    counter=counter+1;
    $("#images"+row.toString()).append(newImg);
  });
}

function fillModal(author, title, dateTaken, tags, picture){
  var leftCol = "<div class=\"col-xs-6 pull-left\"><img src=\""+picture+"\"</div>"
  var rightCol = "<div class=\"col-xs-6 pull-right\"><strong>Title: </strong>"+title+"<br><strong>Author: </strong>"+author+"<br><strong>Date Taken: </strong>"+dateTaken+"<br><strong>Tags: </strong>"+tags+"</div>"
  $(".modal-body").append(leftCol).append(rightCol);
}

function bindImages(){
  $(".thumbnail").on("click", function(){
    var author=$(this).parent().data("author");
    var title=$(this).parent().data("title");
    var dateTaken=$(this).parent().data("date");
    var tags=$(this).parent().data("tags");
    var picture=$(this).context.currentSrc;
    fillModal(author, title, dateTaken, tags, picture);
    $("#edit-modal").modal("show");
  });
  $("#close").on("click", function(){
    $(".modal-body").empty();
  });
}


$("button").on("click",function(e){
  e.preventDefault();
  emptyScreen();
  var field1 = $(".form-control").val();
  var field2 = $(".selectpicker").val();
  $.ajax({
    url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    data:{
      format: "json",
      method: "GET",
      tags: field1,
      tagmode: field2
    },
    dataType: 'jsonp',
    success: function (response, status){
      console.log(response);
      addImages(response);
      bindImages();
    },
    error: function (response, status){
      console.log(response);
      console.log(status);
    }
  })
});

});