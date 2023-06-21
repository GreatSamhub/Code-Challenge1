const prompt = require('prompt-sync')()

function speedDetector(){
    const speed = parseInt(prompt('Enter the speed: '));
    if (speed < 70){ //Sets a condition for speed limit which is 70
      console.log("ok")
    }else{                       //Conditions for defaulting the speed limit a
      const excess = Math.floor((speed -70)/5)
      if (excess <= 12){  //nested if statement /returns demerit points for every 5kms above the speed limit
          console.log('excess') 
      }else{
          console.log('licence suspended') //condition Breaks 
      }
    }
  }
  console.log(speedDetector())