function row_reset(){
	for (var i = 0; i < rows.length; i++) {
				$(rows[i]).animate({height: "140px", backgroundColor: "#aa0000"}, 1000);
				$(details[i]).animate({height: "1px", backgroundColor: "#fff"}, 1000);
			}
}			

function row_active( rowID ) {			
	for (var i = 0; i < rows.length; i++) {
		if (rows[i].id == rowID) {
				$(rows[i]).animate({height: "140px", backgroundColor: "#aa0000"}, 1000);
				$(details[i]).animate({height: "200px", backgroundColor: "#999"}, 1000);
			} else {
				$(rows[i]).animate({height: "50px", backgroundColor: "#ccc"}, 1000);
				$(details[i]).animate({height: "1px", backgroundColor: "#fff"}, 1000);
			}
	}				
}
						
$(function() {	

	rows = new Array(document.getElementById("row1"), document.getElementById("row2"), document.getElementById("row3"), document.getElementById("row4"));
	details = new Array(document.getElementById("detail1"), document.getElementById("detail2"), document.getElementById("detail3"), document.getElementById("detail4"));
	
	$("#row_content1").draggable({axis:"x"});
	
	$( "#button" ).toggle(
		function() { row_active("row1"); },
		function() { row_reset(); }
	);
	$( "#button1" ).toggle(
		function() { row_active("row2"); },
		function() { row_reset(); }
	);
	$( "#button2" ).toggle(
		function() { row_active("row3"); },
		function() { row_reset(); }
	);
	$( "#button3" ).toggle(
		function() { row_active("row4"); },
		function() { row_reset(); }
	);
}); 
			
//			function scroll() {
//				$( "#row1" ).scrollTo( $('#stop'), {
//					duration:1000
//					});
//			}