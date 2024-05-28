// Pegando os elemento no HTML por ID:
var formulario = document.getElementById('fomulario');
var cep = document.getElementById('cep');

// Funcão responsável para buscar o CEP:
function buscarCep(event) {

    // Evitando o envio default do formulário:
    event.preventDefault();

    // Lendo o valor do CEP:
    var valorDoCep = cep.value;

    // Buscando o CEP no site ViaCEP:
    fetch(`https://viacep.com.br/ws/${valorDoCep}/json/`)

        // Transformando a resposta em JSON:
        .then(response => response.json())

        // Exibindo os dados no console:
        .then(data => {
            console.log(data)

            // Exibindo os dados no HTML por ID:
            var resultado = document.getElementById('resultado');
            // Exibibe o resultado no HTML:
            resultado.innerText = `CEP: ${data.cep}, ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
        })

    console.log(valorDoCep);
}

// Cria uma regra para não permitir que o campo cep seja preenchido com letras:
function mascaraCep(event) {
    event.currentTarget.maxLength = 9
    let value = event.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    event.currentTarget.value = value
    return e
}

// Adicionando um evento de keyup para o campo cep:
cep.addEventListener('keyup', mascaraCep)
// Adicionando um evento de submit no formulário:
formulario.addEventListener('submit', buscarCep)