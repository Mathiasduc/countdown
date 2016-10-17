(function(){
	window.app = {
	defaultTime: 5 * 60,
   // timer: app.defaultTime,
   timer: 5 * 60, 
	intervalID:null,
	isRunning: false,

   init: function(){
   	app.listeners();
   },
   listeners: function(){
   	$("#start").on('click', app.start);
   	$("#stop").on('click', app.stop);
   	$("#reset").on('click', app.reset);
   	$("#submit_time").on("click", app.getInput);
   },
   start: function(){
   	if (!app.isRunning){
         console.time('app.intervalID');
   		app.intervalID = setInterval(app.decrement, 1000);
   		app.isRunning = true;
   	}
   },
   decrement:function(){
   	app.timer--;
   	console.log(app.timer);
   	app.updateView();
   	if(app.timer <= 0){
         console.timeEnd('app.intervalID');
   		setTimeout(function(){alert("Dring! Time's up!");},1000)
   		app.stop();
   	}
   },
   updateView: function(){
   	var minute = parseInt(app.timer / 60);
   	var seconds = parseInt(app.timer % 60);
   	$("#minute").html(minute);
   	$("#seconds").html(seconds);
   },
   stop: function(){
   	clearInterval(app.intervalID);
   	app.isRunning = false;
   },
   reset: function(){
   	app.stop();
   	app.timer = app.defaultTime;
   	app.updateView();
   },
   getInput: function(){
   	var minute = parseInt($("#input_min").val(), 10);
   	var seconds = parseInt($("#input_sec").val(), 10);
   	if (isNaN(minute)){
   		minute = 0;
   	}
   	if (isNaN(seconds)){
   		seconds = 0;
   	}
   	app.timer = (minute * 60) + (seconds);
   	app.updateView();
   }
};

app.init();
})()