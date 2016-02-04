$(document).ready(function(){

$("button").on("click",function(e){
  e.preventDefault();
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
      //APPEND DATA TO HTML
      var counter = 1;
      var row = 0;
      response.items.forEach(function(elem){
        var newImg = "<div class= \"col-xs-3\"><img class=\"thumbnail\" src="+elem.media.m+"></img></div>";
        if(counter%4===0) {
          row=row+1;
        }
        counter=counter+1;
        $("#images"+row.toString()).append(newImg);
      })
      //GET REST OF DATA

    },
    error: function (response, status){
      console.log(response);
      console.log(status);
    }
  })
});

});