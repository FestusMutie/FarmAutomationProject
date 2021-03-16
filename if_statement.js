var jumpingJacks = function (numberOfTimes) {
    for (var i = 1; i < numberOfTimes; i++) {
       console.log( i + " Jumping Jacks !");
    }
    };
    
    jumpingJacks(11); //this will loop the function and display it 10 times.
    var jumpingJacks = function (numberOfTimes, whatToDo) {
        for (var i = 1; i < numberOfTimes; i++) {
          console.log( i + " " + whatToDo);
        }
        };
        
        jumpingJacks(11, "Jumping Jacks"); //this will loop the function and display it 10 times.  