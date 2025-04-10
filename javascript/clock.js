// Seleciona o elemento HTML com o ID "relogio" e o armazena na variável "relogio".
var relogio = document.getElementById("relogio");

// Função que atualiza o relógio.
function atualizarRelogio() {
    // Cria um novo objeto Date que representa a data e hora atual.
    var dataAtual = new Date();

    // Obtém a hora atual e a converte para uma string, garantindo que tenha sempre 2 dígitos (ex: "09", "10").
    var horas = dataAtual.getHours().toString().padStart(2, '0');

    // Obtém os minutos atuais e a converte para uma string com 2 dígitos.
    var minutos = dataAtual.getMinutes().toString().padStart(2, '0');

    // Obtém os segundos atuais e a converte para uma string com 2 dígitos.
    var segundos = dataAtual.getSeconds().toString().padStart(2, '0');

    // Cria uma string formatada com as horas, minutos e segundos no formato HH:MM:SS.
    var horaFormatada = horas + ":" + minutos + ":" + segundos;

    // Define o conteúdo de texto do elemento "relogio" para a hora formatada.
    relogio.textContent = horaFormatada;
}

// Chama a função para atualizar o relógio imediatamente quando a página é carregada.
atualizarRelogio();

// Usa o setInterval para chamar a função atualizarRelogio a cada 1000 milissegundos (1 segundo),
// fazendo com que o relógio seja atualizado a cada segundo.
setInterval(atualizarRelogio, 1000);
