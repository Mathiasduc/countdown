(function(){
  window.app = {
  	defaultTime: 1500,
    timer:1500,
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
    		app.intervalID = setInterval(app.decrement, 1000);
    		app.isRunning = true;
    	}
    },
    decrement:function(){
    	app.timer--;
    	app.updateView();
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
    	app.timer = (minute * 60) + (seconds);
    	console.log(app.timer);
    }
  };
  
  app.init();
})()