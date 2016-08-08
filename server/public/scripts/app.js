$(document).ready(function(){
  var array;
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        console.log(data.omicron[0]);
        createBlocks(data.omicron);
        showData(data.omicron);

      }

    });
    $(".prev").on("click", clickPrev);
    $(".next").on("click", clickNext);
    });



function createBlocks(data){
    for(var i = 0; i < data.length; i++){
       var array = [];
      array.push(data[i]);
      console.log(array);
        $('.boxes').append("<div class ='box' style='background-color: grey'></div>");
        $('.boxes').children().last().data('id', data[i]);
        // console.log($('.boxes').children().last().data('id'));
    }
  }

  function showData(data){
    $('.container').append("<p>Name: " + (data[0].name) + "</p>");
    $('.container').append("<p>Git Username: " + (data[0].git_username) + "</p>");
    $('.container').append("<p>Shoutout: " + (data[0].shoutout) + "</p>");
    $('.box').data('id').css('background-color', 'red');

  }

  function clickNext(data){
    var t = 0;
      $('.container').detach();
      $('.container').append("<p>Name: " + (array[1].name) + "</p>");
      $('.container').append("<p>Git Username: " + (array[1].git_username) + "</p>");
      $('.container').append("<p>Shoutout: " + (array[1].shoutout) + "</p>");

      console.log(t);
  }
console.log(array);
  function clickPrev(){

  }
var array = [];
