function grade(marks){
    if (marks < 0 || marks > 100){
    return "input a valid grade"
    }else if (marks >= 0 && marks < 40){
        return "grade E"
    }else if (marks >= 40 && marks < 50){
        return `grade D`
    }else if (marks >= 50 && marks < 60){
        return `grade C`
    }else if (marks >= 60 && marks < 80){
        return `grade B`
    }else{
        return `grade A`
    }
}
console.log(grade(50))


function speedDetector(speed){
    if (speed < 70){
      return "ok"
    }else{
      const excess = Math.floor((speed -70)/5)
      if (excess <= 12){
          return excess
      }else{
          return `licence suspended`
      }
    }
  }
  console.log(speedDetector(45))

