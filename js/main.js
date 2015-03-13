// make ajax call to httpbin and get json response
$("#contact").submit(
	$.ajax({
		url: "http://httpbin.org/post",
		type:'POST',
		dataType: 'json'
	}).done(function(response){
	     console.log(response);
	})

)

// get IP address and display in the footer
$.ajax({
		url: "http://httpbin.org/ip",
		dataType: 'json'
	}).done(function(ip){
		$('footer').text("Your IP address is: " + ip.origin);
	})

//save info in local storage and retrieve  
$("#save").click(function(){
	localStorage.setItem('firstName', $('#firstName').val());
	localStorage.setItem('lastName', $('#lastName').val());
	localStorage.setItem('courseTitle', $('#courseTitle').val());
	console.log("saved");
});

$("#retrieve").click(function(){
	var currentFirstName = localStorage.getItem('firstName');
	var currentLastName = localStorage.getItem('lastName');
	var courseTitle = localStorage.getItem('courseTitle');
    $("#result").append("Your name is " + currentFirstName + " " + currentLastName + ", " 
    +	"and your course title is " +courseTitle );
})

//flickr api
var searchURL = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=nature&format=json&jsoncallback=?';

getResults();

function getResults() {

	$.ajax({
		url: searchURL,
		dataType: 'jsonp',

	}).done(function(response){
		//console.log(response);
		$.each(response.items, function(i,photo){
    		console.log(photo.media.m);
    		src = photo.media.m;
    		$("<img/>").attr("src", src).appendTo("#flickr");
			});
	});
}
