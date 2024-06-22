let jogo1 = ["|","L","-","-","L","-","-","L","|"] 
let jogo2 = ["|","L","-","-","L","-","-","L","|"]
let jogo3 = ["|","L","-","-","L","-","-","L","|"]

//147

let string1 = ""
let string2 = ""
let string3 = ""
let posicao;
let index;
let tabelaEscolhida;
let jogada = ""


menuForma = true
menuJogo = true
menuAdv = false
menuJogada = true




let formaJogador = prompt("O ou X?")
let formaAdversario = ""


while(menuForma){
if(formaJogador.toUpperCase() === "O"){
  formaJogador = "O"
  formaAdversario = "X"
  menuForma = false
  menuJogo = true
}
else if(formaJogador.toUpperCase() === "X"){
  formaJogador = "X"
  formaAdversario = "O"
  menuForma = false
  menuJogo = true
}
else{
  console.log("Escolha inválida,tente novamente")
  formaJogador = prompt("O ou X?")
}

}


while(menuJogo){
  
  string1 = ""
  string2 = ""
  string3 = ""

for(var i = 0;i <= jogo1.length - 1; i++){
  string1 += jogo1[i]
  string2 += jogo2[i]
  string3 += jogo3[i]
}

  
  
  
while(menuJogada){
  
console.log(string1)
console.log(string2)
console.log(string3)
jogada = prompt("Escolha o lance")


let jogadas = ['L11', 'L12', 'L13', 'L21', 'L22', 'L23', 'L31', 'L32', 'L33']


for(var i = 0; i < jogadas.length;i++){
  if(jogada === jogadas[i]){
    menuJogada = false
    break;
  }
  else{
    menuJogada = true
  }
}


}



let jogadas = ['L11', 'L12', 'L13', 'L21', 'L22', 'L23', 'L31', 'L32', 'L33']

for(var i = 0; i < jogadas.length;i++){
    if(jogada === jogadas[i]){
      jogada = jogada
    }
    
    if(jogada === jogadas[i]){
      if(jogada[1] === "1"){
      posicao = jogo1
      index = jogada[2]
      tabelaEscolhida = 1
      }
      else if(jogada[1] === "2"){
        posicao = jogo2
        index = jogada[2]
        tabelaEscolhida = 2
      }
      else if (jogada[1] === "3"){
        posicao = jogo3
        index = jogada[2]
        tabelaEscolhida = 3
      }
    
    }

  }
  
    if(index === "1"){
      index = 1
    }
    else if(index === "2"){
      index = 4
    }
   else if(index === "3"){
      index = 7
    }
  
  
  
  
  
 
if(posicao[index] !== formaAdversario && posicao[index] !== formaJogador){
    posicao.splice(index, 1)
    posicao.splice(index, 0, formaJogador)
    if(tabelaEscolhida === 1){
      jogo1 = posicao
    }
    else if(tabelaEscolhida === 2){
      jogo2 = posicao
    }
    else if(tabelaEscolhida === 3){
      jogo3 = posicao
    }
    
  if(jogo1[1] === formaJogador && jogo1[4] === formaJogador && jogo1[7] === formaJogador){
    console.log("Vocě ganhou!")
    menuJogo = false
    menuForma = false
    menuAdv = false
  }
  
  else if(jogo2[1] === formaJogador && jogo2[4] === formaJogador && jogo2[7] === formaJogador){
    console.log("Vocě ganhou!")
    menuJogo = false
    menuForma = false
    menuAdv = false
  }
  
  else if(jogo3[1] === formaJogador && jogo3[4] === formaJogador && jogo3[7] === formaJogador){
    console.log("Vocě ganhou!")
    menuJogo = false
    menuForma = false
    menuAdv = false
  }
  
  else if(jogo1[1] === formaJogador && jogo2[1] === formaJogador && jogo3[1] === formaJogador){
    console.log("Vocě ganhou!")
    menuJogo = false
    menuForma = false
    menuAdv = false
  }
  
  else if(jogo1[4] === formaJogador && jogo2[4] === formaJogador && jogo3[4] === formaJogador){
    console.log("Vocě ganhou!")
    menuJogo = false
    menuForma = false
    menuAdv = false
  }
  
  else if(jogo1[7] === formaJogador && jogo2[7] === formaJogador && jogo3[7] === formaJogador){
    console.log("Vocě ganhou!")
    menuJogo = false
    menuForma = false
    menuAdv = false
  }
  
  else if(jogo1[1] === formaJogador && jogo2[4] === formaJogador && jogo3[7] === formaJogador){
    console.log("Vocě ganhou!")
    menuJogo = false
    menuForma = false
    menuAdv = false
  }
  
  else if(jogo3[1] === formaJogador && jogo2[4] === formaJogador && jogo1[7] === formaJogador){
    console.log("Vocě ganhou!")
    menuJogo = false
    menuForma = false
    menuAdv = false
  }
  
  else{
    menuAdv = true
    
  }
    
  }

  else{
    
    menuJogada = true
    
  }
  
  
// menuJogo
  
  
  
  while(menuAdv){
  let indexAdvArray = [1,4,7]
  let posicaoAdvArray = [1,2,3]
  let tabelaEscolhidaAdv;
  let posicaoAdv;
  let indexAdv;

  posicaoAdv = Math.floor(Math.random() * 3)
  indexAdv = indexAdvArray[Math.floor(Math.random() * 3)]
  
  if(posicaoAdv === 0 ){
   posicaoAdv = jogo1
    tabelaEscolhidaAdv = 1
    
  }
  else if(posicaoAdv === 1){
   posicaoAdv = jogo2
    tabelaEscolhidaAdv = 2
  }
  else if(posicaoAdv === 2){
   posicaoAdv = jogo3
    tabelaEscolhidaAdv = 3
  }
  

  
  
  if(posicaoAdv[indexAdv] !== formaJogador && posicaoAdv[indexAdv] !== formaAdversario){
   posicaoAdv.splice(indexAdv, 1)
    posicaoAdv.splice(indexAdv, 0, formaAdversario)
    
   if(tabelaEscolhidaAdv === 1){
     jogo1 = posicaoAdv
   }
   else if(tabelaEscolhidaAdv === 2){
     jogo2 = posicaoAdv
  }
   else if(tabelaEscolhidaAdv === 3){
     jogo3 = posicaoAdv
    }
    
    if(jogo1[1] === formaAdversario && jogo1[4] === formaAdversario && jogo1[7] === formaAdversario){
    console.log("Vocě ganhou Bot!")
    menuJogo = false
    menuForma = false
    menuAdv = false
    menuJogada = false
  }
  
  else if(jogo2[1] === formaAdversario && jogo2[4] === formaAdversario && jogo2[7] === formaAdversario){
    console.log("Vocě ganhou Bot!")
    menuJogo = false
    menuForma = false
    menuAdv = false
    menuJogada = false
  }
  
  else if(jogo3[1] === formaAdversario && jogo3[4] === formaAdversario && jogo3[7] === formaAdversario){
    console.log("Vocě ganhou Bot!")
    menuJogo = false
    menuForma = false
    menuAdv = false
    menuJogada = false
  }
  
  else if(jogo1[1] === formaAdversario && jogo2[1] === formaAdversario && jogo3[1] === formaAdversario){
    console.log("Vocě ganhou Bot!")
    menuJogo = false
    menuForma = false
    menuAdv = false
    menuJogada = false
  }
  
  else if(jogo1[4] === formaAdversario && jogo2[4] === formaAdversario && jogo3[4] === formaAdversario){
    console.log("Vocě ganhou Bot!")
    menuJogo = false
    menuForma = false
    menuAdv = false
    menuJogada = false
  }
  
  else if(jogo1[7] === formaAdversario && jogo2[7] === formaAdversario && jogo3[7] === formaAdversario){
    console.log("Vocě ganhou Bot!")
    menuJogo = false
    menuForma = false
    menuAdv = false
    menuJogada = false
  }
  
  else if(jogo1[1] === formaAdversario && jogo2[4] === formaAdversario && jogo3[7] === formaAdversario){
    console.log("Vocě ganhou Bot!")
    menuJogo = false
    menuForma = false
    menuAdv = false
    menuJogada = false
  }
  
  else if(jogo3[1] === formaAdversario && jogo2[4] === formaAdversario && jogo1[7] === formaAdversario){
    console.log("Vocě ganhou Bot!")
    menuJogo = false
    menuForma = false
    menuAdv = false
    menuJogada = false
  }
  
  else{
    menuJogada = true
    menuAdv = false
  }
    
  }
  
  else{
   menuAdv = true
 }
  
  }
  
}
  
  
  
  
  
  
  
  
  string1 = ""
  string2 = ""
  string3 = ""
  
for(var i = 0;i <= jogo1.length - 1; i++){
  string1 += jogo1[i]
  string2 += jogo2[i]
  string3 += jogo3[i]
}
  
  
  
  
console.log(string1)
console.log(string2)
console.log(string3)

  
  
  
  
