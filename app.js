var second = 59;
var minute = 59;
var hour = 1;
var display = hour + " h" + minute + " m" + second + " s";
var isPaused = true;

function startCounter(x){
	var counter = setInterval(function(){
		second--;

		if (x == "pause"){
			console.log("pause");
			clearInterval(counter);
		}
		if(second === -1){
			minute--;
			second = 59;
		}
		if (minute === -1){
			hour--;
			minute = 59;
		}
		if (hour === 0 && minute === 0 && second=== 0){
			clearInterval(counter);
			/*second = 1;*/
			alert("DRING!!!")
		}
		$("#display").html(hour + " h" + minute + " m" + second + " s");
	},1);
}


$("#start").on("click",function(){
	getTime();
});

$("#pause").on("click", function(){
	console.log("click")
	if(isPaused === true){
		startCounter();
		console.log("true")
		isPaused = false;
	}
	else{
		startCounter("pause");
		console.log("false")
		isPaused = true;
	}
});

function getTime(){
	hour = $("#hour").val();
	console.log(hour);
	if (hour === ""){
		hour = 0;
	}
	console.log(hour);
	hour = parseInt(hour , 10);

	minute = $("#minute").val();
	if (minute === ""){
		minute = 0;
	}
	minute = parseInt(minute , 10);
	if (hour > 60 || hour < 0){
		alert("chiffre non valide(0 - 59")
	}

	second = $("#second").val();
	if (second === ""){
		second = 0;
	}
	second = parseInt(second , 10);
	if (hour > 60 || hour < 0){
		alert("chiffre non valide(0 - 59")
	}
}