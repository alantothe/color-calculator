const prompt = require('prompt-sync')({sigint: true});
let blue = "blue"
let red =  "red"
let yellow = "yellow"


  

let input = prompt ("combine colors or deconstruct a color?:")

if (input === "combine"){

    let color1 = prompt ("1st color?:")

    let color2 = prompt ("2nd color?:")
    
    if (color1 === "red" && color2 === "blue" || color1 === "blue" && color2=== "red"){
        
        console.log("Purple!")
    }
    else if (color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2=== "red"){
        
        console.log("Orange!")
    }
    else if (color1 === "yellow" && color2 === "blue" || color1 === "blue" && color2=== "yellow"){
        
        console.log("Green!")
    }
    else {
        console.log("error")
    }
}

else if (input === "deconstruct"){
    
    let splitColor = prompt ("Pick a color [purple, orange, green]")

    if (splitColor==="purple"){
        console.log("red and blue!")
    }
    else if (splitColor==="orange"){
       console.log("red and yellow!")
    }
    else if (splitColor==="green"){
        console.log("yellow and blue!")
    }
    
    else {
     console.log("error")
    }
}




else {
    console.log("error")
}











     
     



   


        









