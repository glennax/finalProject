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
