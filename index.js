var compra1 = 10;
var a = 2;
var compra2 = 100;
var b = 1;
var click = 1;
var seg = 0;
var coin = 0;
var moeda = 0;
function grana() {
  coin = document.getElementById("coin")
  coin.style.background = "orange";
  setTimeout(function() {
    coin.style.background = "yellow";
  }, 150)

  moeda += click;
  document.getElementById("Moedas").innerText = "Moedas: " + moeda;

}
function c1() {
  if(moeda < compra1){
    alert("Você não tem dinheiro")
  }else{
    moeda -= compra1;
    compra1 += 2 * compra1
    document.getElementById("v1").innerText = "Valor: " + compra1
    click += 1;
    a += 1;
    document.getElementById("a").innerText = "Acada clicks ganhe " + a + " moedas"
  }
  document.getElementById("Moedas").innerText = "Moedas: " + moeda;
} 
function c2() {
  if(moeda < compra2){
    alert("Você não tem dinheiro")
  }else{
    moeda -= compra2;
    compra2 += 3 * compra2
    document.getElementById("v2").innerText = "Valor: " + compra2
    seg += 1;
    document.getElementById("se").innerText = "Por segundo: " + seg;
    setTimeout(segundo)

    b += 1;
    document.getElementById("b").innerText = "Acada 1 segundo ganhe " + b + " moedas"
  }
  document.getElementById("Moedas").innerText = "Moedas: " + moeda;
} 

function segundo() {

setInterval(s, 1000)
function s() {
  moeda += seg; 
  document.getElementById("Moedas").innerText = "Moedas: " + moeda;


}

}