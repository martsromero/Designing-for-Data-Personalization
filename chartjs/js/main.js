window.addEventListener('onload',init());
function init(){
	// GET REQUEST
	$.ajax({
	    url: 'data/data.json',
	    type: 'GET',
	    failure: function(err){
	        // what to do on failure
	        // generally, handle the error
	        console.log ("There was an issue getting the data");
	    },
	    success: function(response) {
	        // what to do on success
	        console.log(response);
	        console.log('here');
	      buildDoughnutChart(response.candidates);
	    }
	});	
}

function buildDoughnutChart(candidates) {

	var data = []; // empty array that we will add to

	console.log(candidates);
	for(var i=0;i<candidates.length;i++){
		var c = {
			value: candidates[i].pulseRP,
			label: candidates[i].name,
			color: candidates[i].color
		}
		console.log(c);
		data.push(c);
	}

	console.log(data);	

	var options = {
		animationSteps : 168,
		animationEasing : "easeOutBounce"
	}

	// Get the context of the canvas element we want to select
	var ctx = document.getElementById("doughnutChart").getContext("2d");

	//create doughnuttt
	var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
}