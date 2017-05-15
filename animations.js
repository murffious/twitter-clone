$(document).ready(function () {
  
  $(".tweet-compose").on("click", function () {
     $(this).css("height", "5em"),
     $("#tweet-controls").css("display", "block")
  });

    var maxLength = 140;
    $('textarea').keyup(function () {
    var length = $(this).val().length;
    var length = maxLength-length;
    $('#char-count').text(length);
    
    if (length <= 0) {
    $("#tweet-submit").prop("disabled", true)
    }
    else if (length <= 10 ) {
        $('#char-count').css("color", "red");
         $("#tweet-submit").prop("disabled", false)
      }   
     else  {
         $('#char-count').css("color", "#999");
         $("#tweet-submit").prop("disabled", false)
        }  
    });

        //    $("#tweet-submit").on("click", function() {
            
        //     //var tweetWords = $('tweet-compose').val();  
        //     //var newTweet = $('.tweet').clone().eq(0);
            
        //     //  newTweet.attr("id", "newID")
        //     //  newTweet.html("<span style='color: Red;'>New div's new innerHTML, with new ID=newID</span>");
        //     // newTweet.find('.tweet-text').html(tweetWords);         
                     
        //              $("#stream").prepend("tweetWords");
        //    }) 
    
    
    
       $('#tweet-submit').click(function() {
		var tweetWords = $('.tweet-compose').val();
		var newTweet = $('.tweet').clone().eq(0);
		

		newTweet.find('.tweet-text').html(tweetWords);
		newTweet.find('.fullname').html('Your Name Here');
		newTweet.find('.username').html("@Ben");
		newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');

		newTweet.prependTo('#stream');
		
		// $('textarea').val('');
		// $('#char-count').text("140");
        //some messing around 
        //  var $divClone = $("div#source").clone();
//             //The next line changes the ID and innerHTML
//             $divClone.attr("id", "newID")
//             $divClone.html("<span style='color: Red;'>New div's new innerHTML, with new ID=newID</span>");
//             $("div#destination").append($divClone);
//         } this changes a clone


	});   
          
        //   $(".tweet-text").mouseover( function () {
        //      if (".tweet-text".mouseover()) {
        //          $(".tweet-actions").css("display", "block")
        //      }
        //      else {
        //          $(".tweet-actions").css("display", "none")
        //      }
             //maybe use if with .is to check it  
             //class of tweet siblings, has to do with siblings or children 
             //the selector  I am dealing with is the .tweet-text p  tags 
//  });
//the retweet buttons need to be come visible when you hover over the tweet-submit
$(document).on({
    mouseenter: function () {
        $(this).find(".tweet-actions").show(200)
    },
    mouseleave: function () {
        $(this).find(".tweet-actions").hide(150)
    }
}, ".tweet");

//the stats and reply sections need to be visible upon clicking the tweet
$(document).on({
    click: function() {
      $(this).find(".stats, .reply").show(400)
      //this line hides the other open stats
      $(".tweet").not(this).find(".stats, .reply").hide(200)
    }

}, ".tweet")
});