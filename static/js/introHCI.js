'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text(selectRandStr());
		$("#testjs").text(selectRandStr());
		$(".jumbotron p").addClass("active");


	});


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a").click(projectClick);
}


function selectRandStr(){
	console.log("test");
	var textArr = [
		"Experience Chan! It's not a lot of questions.",
		'Too many questions is the Chan disease.',
		'The best way is just to observe the noise of the world.',
		'The answer to your questions?',
		'Ask your own heart.'
	]
	var randomNumber = Math.floor(Math.random()*textArr.length);
	return textArr[randomNumber];
}




function projectClick(e){
	e.preventDefault();

	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
			//  $(".project-description").show()
			 $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
      //  description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
			 $(".project-description").fadeOut()
			 description.html("");
		}

		console.log($(".project-description").is(":visible"));
		var isVisible = $(".project-description").is(":visible")
		if (!isVisible){
			$(".project-description").show()
			$(".project-description").html("<div class='project-description'><p>Description of the project.</p></div>")

		}

}
