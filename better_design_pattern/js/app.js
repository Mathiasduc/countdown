(function(){
   window.app = {
      defaultTime: 5 * 60, //time in seconds
      timer: null,
      intervalID: null,
      isRunning: false,
      startTime: null,

      init:function(){
         app.listeners();
      },

      listeners:function(){
         $("#start").on('click',app.start);
         $("#stop").on('click',app.stop);
         $("#reset").on('click',app.reset);
         $("#submit_time").on("click",app.getInput);
      },

      decrement:function(){
         console.log(app.timer);
         app.timer--;
         console.log(app.defaultTime - app.timer);
         var test = app.startTime - Date.now();
         console.log(test); 
         if(app.timer <= 0){
            alert("Dring! Time'sup!");
            console.timeEnd('app.intervalID');
            setTimeout(function(){ alert("Dring! Time'sup!"); },1000);
            app.stop();
         }
         app.updateView();
      },

      updateView:function(){
         var minute = parseInt(app.timer / 60);
         var second = parseInt(app.timer % 60);
         minute = minute < 10 ? "0" + minute : minute;
         second = second < 10 ? "0" + second : second;
         $("#progress_bar").val(app.progressStatus());
         $("#minute_button").html(minute);
         $("#second_button").html(second);
      },

      start:function(){
         app.timer = app.timer === null ? app.defaultTime : app.timer;
         console.time('app.intervalID');
         app.startTime = Date.now();
         console.log(app.startTime);
         app.intervalID = setInterval(app.decrement,1000);
         app.isRunning = true;
      },

      stop:function(){
         clearInterval(app.intervalID);
         app.isRunning = false;
      },

      reset:function(){
         app.stop();
         app.timer = app.defaultTime;
         app.updateView();
      },

      getInput:function(){
         var minute = parseInt($("#input_min").val(),10);
         var second = parseInt($("#input_sec").val(),10);
         if(isNaN(minute)){
            minute = 0;
         }
         if(isNaN(second)){
            second = 0;
         }
         app.defaultTime = (minute * 60) + (second);
         app.timer = app.defaultTime;
         app.updateView();
      },

      progressStatus: function(){
         var status = (app.timer / app.defaultTime);
         return (status);
      }
   };
   app.init();
})()