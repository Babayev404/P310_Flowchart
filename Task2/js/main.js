/*  Daxil edilən ədədin 100-dən böyük bir ədəd və ya 100-dən kiçik cüt olub olmadığını yoxlayan alqoritm qurun. 
    Qeyd ediləndən sonra ödənilmədiyi halda "Düzgün ədəd daxil edilməyib" mesajını çıxarın. */

/* Method 1: */

function match(number){

    if(number > 100 && number % 2 != 0) {
        console.log("Daxil olunan ədəd 100 dən böyük tək ədəddir.")
    }else if(number < 100 && number % 2 == 0) {
        console.log("Daxil olunan ədəd 100 dən kiçik cüt ədəddir.")
    }else {
        console.log("Düzgün ədəd daxil edilməyib.");
    }
}

console.log(match(20))