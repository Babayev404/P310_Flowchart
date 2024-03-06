/* Daxil edilən 3 rəqəmli  ədədin rəqəmlərinin cəmini çıxaran alqoritm qurun */

function match(number){
    if(number > 100){
        let a = number / 100;
        let b = (number % 100) / 10;
        let c = number % 10;
        
        let sum = a + b + c;
    
        console.log("3 Rəqəmli ədədin cəmi: " + sum)

    }else{
        console.log("Daxil edilən ədəd 3 rəqəmli olmalıdır!")
    }
    
}

console.log(match(120))