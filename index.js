const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let output1 = document.getElementById("output-1")
let output2 = document.getElementById("output-2")
let generatedPassword = false

function randomPassword() { 
    if (generatedPassword === false) {
        for (let i = 0; i < 15; i++) {
        let random1 = Math.floor(Math.random() * characters.length)
        output1.textContent += characters[random1]    
        let random2 = Math.floor(Math.random() * characters.length)
        output2.textContent += characters[random2]
        generatedPassword = true
        }   
    }
   else { output1.textContent = ""
            output2.textContent = ""
            for (let i = 0; i < 15; i++) {
                let random1 = Math.floor(Math.random() * characters.length)
                output1.textContent += characters[random1]    
                let random2 = Math.floor(Math.random() * characters.length)
                output2.textContent += characters[random2]
                generatedPassword = true
                }   
        }
    }


// pick 15 random indexed for p1
// pick 15 r indexes for p2