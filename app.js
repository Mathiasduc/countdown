var timer = 200;
var counter;
var clicked = 0;
function startCounter(){
	var start = setInterval(function(){
		timer--;
		var minute = parseInt(timer/60);
		var second = parseInt(timer-minute*60);
		$("#minute").text(minute);
		$("#second").text(second);
		if(timer <= 0){
			timer = 1;
		}else{

		}
	},1000);
	counter = start;	
};

$("#duo").on('click',function(){
	if(clicked === true){
		startCounter();
		clicked = false;
		console.log("start" , clicked);
	}else{
		clearInterval(counter);
		clicked = true;
		console.log("pause", clicked);

	}
});


