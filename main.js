// Função utilitária para gerar valores simulados com oscilação natural
function simularVariacao(valorAtual, min, max, variacaoMax) {
    const mudanca = (Math.random() * 2 - 1) * variacaoMax;
    let novoValor = valorAtual + mudanca;
    
    // Garante que o valor fique dentro dos limites lógicos
    if (novoValor < min) novoValor = min;
    if (novoValor > max) novoValor = max;
    
    return novoValor;
}

// Valores de partida da nossa simulação agrícola
let consumoTrator = 22.4;
let consumoColheitadeira = 45.1;
let co2Acumulado = 184.25;

// Captura dos elementos do painel
const domTrator = document.getElementById('trator-combustivel');
const domColheitadeira = document.getElementById('colheitadeira-combustivel');
const domCO2 = document.getElementById('co2-economizado');

function atualizarPainelTelemetria() {
    // 1. Simula oscilação de consumo baseado na carga de trabalho instantânea
    consumoTrator = simularVariacao(consumoTrator, 18, 28, 0.8);
    consumoColheitadeira = simularVariacao(consumoColheitadeira, 38, 55, 1.5);

    // 2. Simula o ganho constante de CO2 evitado gerado pela otimização das rotas
    // (a cada atualização, mais carbono deixa de ser emitido)
    co2Acumulado += Math.random() * 0.15;

    // 3. Renderiza os novos dados na tela formatados
    domTrator.innerText = `${consumoTrator.toFixed(1)} L/h`;
    domColheitadeira.innerText = `${consumoColheitadeira.toFixed(1)} L/h`;
    domCO2.innerText = `${co2Acumulado.toFixed(2)} kg`;
}

// Atualização contínua a cada 2.5 segundos (simulando transmissão via rede)
setInterval(atualizarPainelTelemetria, 2500);