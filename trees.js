$( document ).ready(function( event ) {


var tweetContent = $(".tweet-content .tweet-compose");

tweetContent.focus(function(){
	var height = tweetContent.height();
	tweetContent.height(height * 2);
	var width = tweetContent.width();
	tweetContent.width(width * 2);
	$('.tweet-controls').show();
});

tweetContent.blur(function(){
	var height = tweetContent.height();
	tweetContent.height(height / 2);
	var width = tweetContent.width();
	tweetContent.width(width / 2);
	$('.tweet-controls').hide();

});

tweetContent.keyup(function(event){
	var twtext = tweetContent.val();
	var chleft = 140-twtext.length;

	$('.char-count').html(chleft);
	if(chleft <= 10){
		$('.char-count').css('color','red');
	}else 
 		$('.char-count').css('color','');

 	if(chleft<0){
		$('.tweet-content button').attr("disabled",true);
 	} else {
 		$('.tweet-content button').attr("disabled",false);
 	}

});

  //   $( "a.clickerr" ).click(function( event ) {
		
		// var html = $('.tweet-controls').html();
 	// 	alert(html);
  //   });
 






















});




