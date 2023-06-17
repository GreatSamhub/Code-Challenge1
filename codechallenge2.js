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
console.log(speedDetector(180))