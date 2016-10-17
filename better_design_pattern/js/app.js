(function(){
   window.app = {
      defaultTime: 5 * 60, //time in seconds
      timer: null,
      intervalID: null,
      isRunning: false,

      init:function(){
         app.listeners();
      },

      listeners:function(){
         $("#start").on('click',app.start);
         $("#stop").on('click',app.stop);
         $("#reset").on('click',app.reset);
         $("#submit_time").on("click",app.getInput);
      },

      start:function(){
         if(app.timer === null){
            app.timer = app.defaultTime;
         }
         if(!app.isRunning){
            console.time('app.intervalID');
            app.intervalID = setInterval(app.decrement,1000);
            app.isRunning = true;
         }
      },

      decrement:function(){
         console.log(app.timer);
         app.updateView();
         if(app.timer <= 0){
            console.timeEnd('app.intervalID');
            setTimeout(function(){ alert("Dring! Time'sup!"); },1000);
            app.stop();
         }
         app.timer--;
      },

      updateView:function(){
         var minute = parseInt(app.timer / 60);
         var second = parseInt(app.timer % 60);
         $("#progress_bar").val(app.progressStatus());
         $("#minute_button").html(minute);
         $("#second_button").html(second);
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
         var status = (app.timer * 100 / app.defaultTime)/ 100;
         return (status);
      }
   };
   app.init();
})()