// var fb = new Firebase("https://treesatlproject.firebaseio.com/");


$('#getDirectionsButton').click(function (e) {
  initialize();
});

function initialize() {
	console.log("init");
	var start = '33.7657864,-84.3944256';
	var stop = '33.6657864,-84.3944256';

	window.location = "https://www.google.com/maps/dir/" + start + "/"+ stop + "/";
}


		var x;
		fb.on("child_added", function(snapshot) {
		    x = snapshot.val();
		    console.log(x);
		    var cLatitude = x.cLatitude;
		    var cLongitude = x.cLongitude;
		    //var treeStatus = x.treeStatus;
		    //var comments = x.comments;
		    //var mulchDates = x.dates.mulchDate;


		    //parse the dates
		    function parseDate(str) {
		    	var mdy = str.split('/');
		    	return new Date(mdy[2], mdy[0] - 1, mdy[1]);
		    }

		    //gets the difference in days between two dates
		    //second date should be the current time
		    function dayDiff(first, second) {
		    	return (second - first)/(1000 * 60 * 60 * 24)|0;
		    }

		    //threshold variable is the difference in days for when this task eneds to be done
		    //example: every 90 days, -> threshold = 90
		    //returns a string of whether mulch is needed or not needed for x days
		    function needMulch(mulchDate) {
		    	var threshold = 365;
		    	var currentTime = new Date();
		    	mulchDate = parseDate(mulchDate);

		    	return dayDiff(mulchDate, currentTime) > threshold;
		    }

		    function needMulchWhen(mulchDate) {
		    	threshold = 365;
		    	var currentTime = new Date();
		    	mulchDate = parseDate(mulchDate);
		    	if (needMulch(mulchDate)) {
		    		return 'This tree needs mulching';
		    	} else {
		    		return 'This tree does not need mulching for ' + (dayDiff(mulchDate, currentTime)) + ' days';
		    	}
		    }

		    var exampleDate = '02/06/2015'
		    var timeDiffMulch = needMulchWhen(exampleDate);
		    

		    //sets the value form the database to a new variable
		    // var latitude = document.getElementById("latitude");
		    // latitude.innerHTML = cLatitude;
		    // var longitude = document.getElementById("longitude");
		    // longitude.innerHTML = cLongitude;
		    // var tStatus = document.getElementById("treeStatus");
		    // tStatus.innerHTML = treeStatus
		    // var comment = document.getElementById("comment");
		    // comment.innerHTML = comments;
		    // var mulchDate = document.getElementById("mulchDate");
		    // mulchDate.innerHTML = mulchDates;

		    //currDate.innerHTML = currentTime;

		    dateDifference.innerHTML = timeDiffMulch;
		    currDate.innerHTML = difference;

			
		});