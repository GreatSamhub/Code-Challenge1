const prompt = require('prompt-sync')()
function salary(){
    const gross = parseInt(prompt('Enter gross salary: '));//prompt user to input salary
    function payee(){  //conditions for calculating different payee rates
        if (gross < 24000){
            return parseInt(10*gross)/100
        }else if(gross > 6000 && gross <= 32333){
            return parseInt(25*gross)/100
        }else{
            return parseInt(30*gross)/100
        }
    }
    function nssf() {   //conditions for calculating different nssf rates
        const nssfRate = 0.06
        if (gross * 0.06 > 400){
            return 400
        }else{
            return gross * 0.06
        }
    }
        function nhif(){
        const nhifRanges = [   // An Array with a list of objects that has min, max and deduction keys for gross salaries
            { min: 0, max: 5999, deduction: 150 },
            { min: 6000, max: 7999, deduction: 300 },
            { min: 8000, max: 11999, deduction: 400 },
            { min: 12000, max: 14999, deduction: 500 },
            { min: 15000, max: 19999, deduction: 600 },
            { min: 20000, max: 24999, deduction: 750 },
            { min: 25000, max: 29999, deduction: 850 },
            { min: 30000, max: 34999, deduction: 900 },
            { min: 35000, max: 39999, deduction: 950 },
            { min: 40000, max: 44999, deduction: 1000 },
            { min: 45000, max: 49999, deduction: 1100 },
            { min: 50000, max: 59999, deduction: 1200 },
            { min: 60000, max: 69999, deduction: 1300 },
            { min: 70000, max: 79999, deduction: 1400 },
            { min: 80000, max: 89999, deduction: 1500 },
            { min: 90000, max: 99999, deduction: 1600 },
            { min: 100000, max: Infinity, deduction: 1700 }
          ];
        
          for (const range of nhifRanges) { //For...of loop is suitable for arrays because of order factor in arrays
            if (gross >= range.min && gross <= range.max) {
              return range.deduction;     //returns the value in deduction key
            }
          } 
        }     
        function netPay(){   //don't have to input gross as an argument since its already defined and accessible from the primary function
            deductions = payee() + nssf() + nhif() // calculates net pay using all other funstions before and gross as the argument
            netPay = (gross - deductions)
            return netPay
        }
    return `Payee: ${payee()}, nHIF: ${nhif()}, nssf: ${nssf()}, netpay: ${netPay()}` //returns each function under the primary function
}
console.log(salary())