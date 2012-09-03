var FOURTEEN_MIN = 1000 * 60 * 14,
	NINETY_MIN = 1000 * 60 * 90;

function formatTime (date) {
	var hours = date.getHours(),
		minutes = date.getMinutes();
	return hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
}

function wakeupTimes (bedtime) {
	bedtime = +bedtime + FOURTEEN_MIN;
	return [0, 0, 0, 0, 0, 0].map(
		function(_, i){
			return new Date(bedtime + NINETY_MIN * (i + 1));
		}
	);
}

function updateWakeupTimes(wakeupTimes) {
	var timeNodes = document.getElementById("results").children;
	for (var time in wakeupTimes) {
		timeNodes[time].textContent = formatTime(wakeupTimes[time]);
	}
}

document.getElementById("sleepNow").addEventListener("click", function(){
	updateWakeupTimes(wakeupTimes(new Date()));
	document.body.className = "sleeping";
}, false);

document.getElementById("back").addEventListener("click", function(){
	document.body.className = "home";
}, false);
