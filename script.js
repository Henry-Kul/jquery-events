$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").click(function() {
		$("p").css("background-color", "red");
	});
	$("h2").hover(function() {
		$("h2").css("background-color", "lightblue");
	});
	$("#h2_html").hover(function() {
		$("#h2_MySql").removeClass("highlight_h2");
		$("#h2_Python").removeClass("highlight_h2");
		$("#h2_jQuery").removeClass("highlight_h2");
		$("#h2_Django").removeClass("highlight_h2");
		$("#h2_CSS").removeClass("highlight_h2");
		$("#h2_html").addClass("highlight_h2");
	});
	$("#h2_MySql").hover(function() {
		$("#h2_html").removeClass("highlight_h2");
		$("#h2_Python").removeClass("highlight_h2");
		$("#h2_jQuery").removeClass("highlight_h2");
		$("#h2_Django").removeClass("highlight_h2");
		$("#h2_CSS").removeClass("highlight_h2");
		$("#h2_MySql").addClass("highlight_h2");
	});
	$("#h2_Python").hover(function() {
		$("#h2_MySql").removeClass("highlight_h2");
		$("#h2_html").removeClass("highlight_h2");
		$("#h2_jQuery").removeClass("highlight_h2");
		$("#h2_Django").removeClass("highlight_h2");
		$("#h2_CSS").removeClass("highlight_h2");
		$("#h2_Python").addClass("highlight_h2");
	});
	$("#h2_jQuery").hover(function() {
		$("#h2_MySql").removeClass("highlight_h2");
		$("#h2_Python").removeClass("highlight_h2");
		$("#h2_html").removeClass("highlight_h2");
		$("#h2_Django").removeClass("highlight_h2");
		$("#h2_CSS").removeClass("highlight_h2");
		$("#h2_jQuery").addClass("highlight_h2");
	});
	$("#h2_Django").hover(function() {
		$("#h2_MySql").removeClass("highlight_h2");
		$("#h2_Python").removeClass("highlight_h2");
		$("#h2_jQuery").removeClass("highlight_h2");
		$("#h2_html").removeClass("highlight_h2");
		$("#h2_CSS").removeClass("highlight_h2");
		$("#h2_Django").addClass("highlight_h2");
	});
	$("#h2_CSS").hover(function() {
		$("#h2_MySql").removeClass("highlight_h2");
		$("#h2_Python").removeClass("highlight_h2");
		$("#h2_jQuery").removeClass("highlight_h2");
		$("#h2_Django").removeClass("highlight_h2");
		$("#h2_html").removeClass("highlight_h2");
		$("#h2_CSS").addClass("highlight_h2");
	});
	//$(".bottom_button").hover(function() {
	//	$("body").css("background-color", "black");
//	});
	//$(".bottom_button").mouseleave(function() {
	//	$("body").css("background-color", "#eee");
//	});
	$("#button_effects1").click(function(){
		$("#html_para").slideToggle("medium");
	});
	$("#button_effects2").click(function(){
		$("#MySql_para").slideToggle("medium");
	});
	$("#button_effects3").click(function(){
		$("#Python_para").slideToggle("medium");
	});
	$("#button_effects4").click(function(){
		$("#jQuery_para").slideToggle("medium");
	});
	$("#button_effects5").click(function(){
		$("#Django_para").slideToggle("medium");
	});
	$("#button_effects6").click(function(){
		$("#CSS_para").slideToggle("medium");
	});
	
	    // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });

    $("#button_effects2").mouseenter(function(){
        $('#button_effects2').fadeTo(1000, 0.5);
    });
    $("#button_effects2").mouseleave(function(){
        $('#button_effects2').fadeTo(1000, 1);
    });

    $("#button_effects3").mouseenter(function(){
        $('#button_effects3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function(){
        $('#button_effects3').fadeTo(1000, 1);
    });

    $("#button_effects4").mouseenter(function(){
        $('#button_effects4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function(){
        $('#button_effects4').fadeTo(1000, 1);
    });

    $("#button_effects5").mouseenter(function(){
        $('#button_effects5').fadeTo(1000, 0.5);
    });
    $("#button_effects5").mouseleave(function(){
        $('#button_effects5').fadeTo(1000, 1);
    });

    $("#button_effects6").mouseenter(function(){
        $('#button_effects6').fadeTo(1000, 0.5);
    });
    $("#button_effects6").mouseleave(function(){
        $('#button_effects6').fadeTo(1000, 1);
    });


}); 
