var pomodoro = 25 * 60 + 1;
var timer = 25 * 60 + 1;
var interVar;
var breakTime = true;

$("#start").on("click", function(){
	clearInterval(interVar); 
	startCounter();
});

$("#stop").on("click", function(){ 
	clearInterval(interVar);
});

$("#reset").on("click", function(){
	clearInterval(interVar);
	timer = pomodoro; 
	startCounter();
});

function startCounter(){
	console.log("startCounter", timer);
	interVar = setInterval(function(){
		timer--;
		var minute = parseInt(timer / 60, 10);
		var second = parseInt(timer % 60, 10);
		$("#minute").html(minute);
		$("#seconds").html(second);
		console.log("timer", timer);
		if(timer <= 0 && breakTime === true){
			clearInterval(interVar);
			alert("Dring!!")
		}
	},1000);
};
