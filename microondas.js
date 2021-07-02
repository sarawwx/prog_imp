// menu: 1-Pipoca(10seg), 2-Macarrão(8seg), 3-Carne(15seg),4-Feijão(12seg),5-Brigadeiro(8seg);

function menu(prato, tempoPreparo){
    switch(prato){
        case 1: 
            if(tempoPreparo>=30) console.log("Kabumm")
            else if(tempoPreparo>=20) console.log("Pipoca queimou")
            else if(tempoPreparo<10) console.log("Tempo Insuficiente")
            else if(tempoPreparo==undefined) console.log ("Tempo indefinido")
            else console.log("A pipoca está pronta, bom apetite!!")  
            break;
        case 2:
            if(tempoPreparo>=24) console.log("Kabumm")
            else if(tempoPreparo>=16) console.log("O macarrão queimou")
            else if(tempoPreparo<8) console.log("Tempo Insuficiente")
            else if(tempoPreparo==undefined) console.log ("Tempo indefinido")
            else console.log("O macarrão está pronto, bom apetite!!")  
            break;
        case 3:
            if(tempoPreparo>=45) console.log("Kabumm")
            else if(tempoPreparo>=30) console.log("A carne queimou")
            else if(tempoPreparo<15) console.log("Tempo Insuficiente")
            else if(tempoPreparo==undefined) console.log ("Tempo indefinido")
            else console.log("A carne está pronta, bom apetite!!")  
            break;
        case 4:
            if(tempoPreparo>=36) console.log("Kabumm")
            else if(tempoPreparo>=24) console.log("O feijão queimou")
            else if(tempoPreparo<12) console.log("Tempo Insuficiente")
            else if(tempoPreparo==undefined) console.log ("Tempo indefinido")
            else console.log("O feijão está pronto, bom apetite!!")  
            break;
        case 5:
            if(tempoPreparo>=24) console.log("Kabumm")
            else if(tempoPreparo>=16) console.log("O brigadeiro queimou")
            else if(tempoPreparo<8) console.log("Tempo Insuficiente")
            else if(tempoPreparo==undefined) console.log ("Tempo indefinido")
            else console.log("O brigadeiro está pronto, bom apetite!!")  
            break;
        default: console.log("Prato inexistente")
    }
}

menu(6,17);