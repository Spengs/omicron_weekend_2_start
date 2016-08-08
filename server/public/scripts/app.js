$(document).ready(function(){
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
      //  var array = [];
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

  function clickNext(){
      $('.container').empty();
      $('.container').append("<p>Name: " + array[++t].name + "</p>");
      $('.container').append("<p>Git Username: " + array[t].git_username + "</p>");
      $('.container').append("<p>Shoutout: " + array[t].shoutout + "</p>");


  }

  function clickPrev(){
    $('.container').empty();
    $('.container').append("<p>Name: " + array[--t].name + "</p>");
    $('.container').append("<p>Git Username: " + array[t].git_username + "</p>");
    $('.container').append("<p>Shoutout: " + array[t].shoutout + "</p>");


  }
var array = [];
var t = 0;
