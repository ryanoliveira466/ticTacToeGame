# Jogo da Velha

Este código implementa um jogo da velha em JavaScript onde um jogador pode competir contra a máquina. O código utiliza arrays para representar o tabuleiro e loops para gerenciar o jogo. Vamos dividir o código em partes para entender melhor o seu funcionamento.

## 1 Inicialização do Tabuleiro
 
```javascript
let jogo1 = ["|","L","-","-","L","-","-","L","|"]
let jogo2 = ["|","L","-","-","L","-","-","L","|"]
let jogo3 = ["|","L","-","-","L","-","-","L","|"]
```
`jogo1, jogo2, jogo3`: Representam as três linhas do tabuleiro, onde cada linha é um array de caracteres. 

Cada linha é formada por `|` (**delimitador**), `L` (**posição livre**), e `-` (**espaço vazio para o jogador jogar**).

---

## 2 Definição de Variáveis
```javascript
let string1 = ""
let string2 = ""
let string3 = ""
let posicao;
let index;
let tabelaEscolhida;
let jogada = ""
```
Essas variáveis são usadas para armazenar informações como o estado das linhas do tabuleiro, a posição escolhida pelo jogador, e o índice da jogada.

---

## 3 Menu de Escolha do Jogador
 
O jogador escolhe entre `O` ou `X`:

```javascript
menuForma = true
menuJogo = true
menuAdv = false
menuJogada = true

let formaJogador = prompt("O ou X?")

```
O código pede ao jogador para escolher sua forma (`O` ou `X`).
O loop while(menuForma) garante que o jogador só pode escolher entre `O` ou `X`.
Dependendo da escolha do jogador, a variável formaAdversario é definida para o símbolo oposto.

---


## 4 Gerenciamento do Jogo
 
Após o jogador escolher sua forma, o código entra em um loop que gerencia o andamento do jogo.

**A**. Exibição do Tabuleiro

```javascript
for (var i = 0; i <= jogo1.length - 1; i++) {
  string1 += jogo1[i]
  string2 += jogo2[i]
  string3 += jogo3[i]
}

```
O tabuleiro é exibido após cada jogada. O código combina os elementos das três linhas (jogo1, jogo2, jogo3) para mostrar o estado atual do jogo.

---

**B**. Entrada de Jogada
```javascript
jogada = prompt("Escolha o lance")
```
O jogador é solicitado a escolher uma posição no tabuleiro. As posições são representadas por L11, L12, etc. (indicando as linhas e colunas).

---

**C**. Validação da Jogada

```javascript
let jogadas = ['L11', 'L12', 'L13', 'L21', 'L22', 'L23', 'L31', 'L32', 'L33']
for (var i = 0; i < jogadas.length; i++) {
  if (jogada === jogadas[i]) {
    menuJogada = false
    break;
  } else {
    menuJogada = true
  }
}
```

O código valida se a jogada do jogador é válida, verificando se a posição escolhida existe no tabuleiro.

---

**D**. Atualização do Tabuleiro

Após a validação da jogada, o código altera o tabuleiro:

```javascript
if (posicao[index] !== formaAdversario && posicao[index] !== formaJogador) {
  posicao.splice(index, 1)
  posicao.splice(index, 0, formaJogador)
}
```
O código verifica se a posição está ocupada por outro símbolo e, se não estiver, a jogada é realizada.
O tabuleiro é atualizado para refletir a jogada do jogador.

---

**E**. Verificação de Vitória

O código verifica se o jogador ganhou após cada jogada:

```javascript
if (jogo1[1] === formaJogador && jogo1[4] === formaJogador && jogo1[7] === formaJogador) {
  console.log("Você ganhou!")
  menuJogo = false
  menuForma = false
  menuAdv = false
}
```

O código verifica várias combinações de linhas e colunas para determinar se o jogador venceu.

---

**F**. Turno do Adversário (Bot)

O adversário (bot) faz uma jogada aleatória quando for sua vez:

```javascript
let posicaoAdv = Math.floor(Math.random() * 3)
let indexAdv = indexAdvArray[Math.floor(Math.random() * 3)]
```

O bot escolhe aleatoriamente uma posição e faz sua jogada. A vitória do bot também é verificada após sua jogada, usando o mesmo processo de verificação de vitória do jogador.

---

**G**. Finalização do Jogo

O jogo termina quando há um vencedor, seja o jogador ou o bot, e o código exibe a mensagem de vitória correspondente.

```javascript
console.log("Você ganhou!")
menuJogo = false
menuForma = false
menuAdv = false
```

O jogo termina ao mostrar quem ganhou (o jogador ou o bot), e o jogo é reiniciado.

---

Esse código implementa uma versão simples de um jogo da velha interativo onde o jogador pode jogar contra um bot. O código usa arrays para representar o tabuleiro e loops para gerenciar a interação, validação das jogadas e a verificação de vitória.
