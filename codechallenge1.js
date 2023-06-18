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

gross = 100
nssfRate = 0.06
function nssf(){
console.log(gross * nssfRate)
}
function salary(gross){
    function payee(){
        if (gross < 24000){
            return (10*gross)/100
        }else if(gross > 6000 && gross <= 32333){
            return (25*gross)/100
        }else{
            return (30*gross)/100
        }
    }
    function nssf() {
        const nssfRate = 0.06
        if (gross * 0.06 > 400){
            return 400
        }else{
            return gross * 0.6
        }
    }
        function nhif(){
        const grossRange = {
                0: 150,
                6000: 300,
                8000: 400,
                12000: 500,
                15000: 600,           
                20000: 750,
                25000: 850,
                30000: 900,
                35000: 950,
                40000: 1000,
                45000: 1100,
                50000: 1200,
                60000: 1300,
                70000: 1400,
                80000: 1500,
                90000: 1600,
                100000: 1700,
            }
            let range;
            for (const range in grossRange){
                if(gross <= 5999){
                    return grossRange[range]
                }else if(gross >= parseInt(range) && gross <= parseInt(range) + 1999){
                    return grossRange[range]
                }else if(gross >= parseInt(range) && gross <= parseInt(range) + 3999){
                    return grossRange[range]
                }else if(gross >= parseInt(range) && gross <= parseInt(range) + 2999){
                    return grossRange[range]
                }else if(gross >= parseInt(range) && gross <= parseInt(range) + 4999){
                    return grossRange[range]
                }else if(gross >= parseInt(range) && gross <= parseInt(range) + 9999){
                    return grossRange[range]
                }else{
                    if(gross >= 100000)
                    return [range]
                }
            }
            return [range]
        
    }
    return `Payee: ${payee()}, nHIF: ${nhif()}, nssf: ${nssf()}`
}
console.log(salary(60000))