/* Daxil edilən ədədin cüt olub olmadığını yoxlayan alqoritm qurun */

// Method 1:

function match(number){
    
    if(number % 2 == 0){
        console.log("Daxil Edilmiş Ədəd Cüt Ədəddir: " + number)
    }else{
        console.log("Daxil Edilmiş Ədəd Tək Ədəddir: " + number)
    }
}

console.log(match(1))


// Method 2:

let numb = 2;

if(numb % 2 == 0){
    console.log("Daxil Edilmiş Ədəd Cüt Ədəddir: " + numb)
}else{
    console.log("Daxil Edilmiş Ədəd Tək Ədəddir: " + numb)
}
