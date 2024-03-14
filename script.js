var dia = document.getElementById('dia')
var hora = document.getElementById('hora')
var minuto = document.getElementById('minuto')
var segundo = document.getElementById('segundo')

const lancamento = "17 oct 2024"

function countdown(){
   const dataLanc = new Date(lancamento)
   const hoje = new Date()
   const segTotal = (dataLanc - hoje)/1000;
   const finalDias = Math.floor(segTotal / 60 /60 / 24);
   const finalHoras = Math.floor(segTotal / 60 /60) % 24;
   const finalMinutos = Math.floor(segTotal / 60) % 60;
   const finalSegundos = Math.floor(segTotal) % 60;

   dia.innerHTML = finalDias
   hora.innerHTML = formatoTempo(finalHoras)
   minuto.innerHTML = formatoTempo(finalMinutos)
   segundo.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo( tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countdown();
setInterval(countdown, 1000)