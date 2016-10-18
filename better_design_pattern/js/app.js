(function(){

   window.app = {
      defaultTime: 5 * 60, //time in seconds
      timer: null,
      intervalID: null,
      isRunning: false,
      startTime: null,

      init:function(){
         console.log(this, "init");
         this.listeners();
      },

      listeners:function(){
         console.log(this, "listeners");
         $("#start").on('click',this.start);
         $("#stop").on('click',this.stop);
         $("#reset").on('click',this.reset);
         $("#submit_time").on("click",this.getInput);
      },

      decrement:function(){
         console.log(this, "decre (fixed)");
         that.timer--;
         console.log(that.defaultTime - that.timer);
         var test = that.startTime - Date.now();
         console.log(test); 
         if(that.timer <= 0){
            alert("Dring! Time'sup!");
            console.timeEnd('that.intervalID');
            setTimeout(function(){ alert("Dring! Time'sup!"); },1000);
            that.stop();
         }
         that.updateView();
      },

      updateView:function(){
         console.log(this, "updateView");
         var minute = parseInt(this.timer / 60);
         var second = parseInt(this.timer % 60);
         minute = minute < 10 ? "0" + minute : minute;
         second = second < 10 ? "0" + second : second;
         $("#progress_bar").val(this.progressStatus());
         $("#minute_button").html(minute);
         $("#second_button").html(second);
      },

      start:function(){
         console.log(this, "start (fixed)");
         that.timer = that.timer === null ? that.defaultTime : that.timer;
         console.time('that.intervalID');
         that.startTime = Date.now();
         console.log(that.startTime);
         that.intervalID = setInterval(that.decrement,1000);
         that.isRunning = true;
      },

      stop:function(){
         console.log(this, "stop (fixed)");
         clearInterval(that.intervalID);
         that.isRunning = false;
      },

      reset:function(){
         console.log(this, "reset (fixed)");
         that.stop();
         that.timer = that.defaultTime;
         that.updateView();
      },

      getInput:function(){
         console.log(this, "getInput (fixed)");
         var minute = parseInt($("#input_min").val(),10);
         var second = parseInt($("#input_sec").val(),10);
         if(isNaN(minute)){
            minute = 0;
         }
         if(isNaN(second)){
            second = 0;
         }
         that.defaultTime = (minute * 60) + (second);
         that.timer = that.defaultTime;
         that.updateView();
      },

      progressStatus: function(){
         console.log(this, "progressStatus");
         var status = (this.timer / this.defaultTime);
         return (status);
      }
   };
   var that = app;
   console.log(that," that");
   app.init();
})()