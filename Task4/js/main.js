/* Tələbənin balı sistemə daxil edilən zaman daxil edilmiş bal 
51-65 arasındadırsa outputda D, 
65-75 arasıdırsa C, 
75-85 arsıdırsa B, 
85-100 arasıdırsa A
yox bu şərtlərdən heç biri ödənmirsə outputda F çixaran alqoritmi qurun */

/* Method 1: */
function point(number){

    if(number < 100){
        if(number >= 51 && number <= 65){
            console.log("Point: " + number + " D")
        }else if(number > 65 && number <= 75){
            console.log("Point: " + number + " C")
        }else if(number > 75 && number <= 85){
            console.log("Point: " + number + " B")
        }else if(number > 85 && number <= 100){
            console.log("Point: " + number + " A")
        }else{
            console.log("Point: " + number + " F")
        }
    }else{
        console.log("Error")
    }
    
}

console.log(point(11))