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