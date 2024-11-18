function gerarAleatorios() {
  var inicial = performance.now();
  var numeros = Array.from({ length: 60 }, (_, i) => i + 1);

  // Embaralha os números com Math.random() e seleciona os 6 primeiros
  var escolhidos = numeros.sort(() => Math.random() - 0.5).slice(0, 6);

  // Função de comparação para ordenar numericamente
  escolhidos.sort((a, b) => a - b);
  var final = performance.now();
  var tempoExecucao = final - inicial;
  document.getElementById('numeros').textContent = 'Números escolhidos: ' + escolhidos.join(', ');
  document.getElementById('tempo').textContent = 'Tempo de execução: ' + tempoExecucao.toFixed(10) + ' ms';
}
