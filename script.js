function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        calculoImc() {
            const indice = (this.peso / (this.altura ** 2)).toFixed(1);
            let mensagem = "";

            if (indice < 18.5) {
                mensagem = "Abaixo do peso";
            } else if (indice >= 18.5 && indice < 24.9) {
                mensagem = "Peso Normal";
            } else if (indice >= 25 && indice < 29.9) {
                mensagem = "Acima do peso";
            } else if (indice >= 30 && indice < 34.9) {
                mensagem = "Obesidade 1";
            } else if (indice >= 35 && indice < 39.9) {
                mensagem = "Obesidade 2";
            } else if (indice >= 40) {
                mensagem = "Obesidade 3";
            }
            return `${this.nome} ${this.sobrenome} tem IMC de ${indice} (${mensagem})`;
        }
    }
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const pessoa = criarPessoa(nome, sobrenome, altura, peso);
    const resultado = pessoa.calculoImc();

    document.getElementById("resultado").textContent = resultado;
});