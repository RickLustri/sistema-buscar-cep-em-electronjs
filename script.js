// Pegando os elemento no HTML por ID:
var formulario = document.getElementById('formulario');
var cep = document.getElementById('cep');
var tbody = document.getElementById('tbody');
var listaDeCep = [];


// Funcão responsável para buscar o CEP:
function buscarCep(event) {

    // Evitando o envio default do formulário:
    event.preventDefault();

    // Lendo o valor do CEP:
    var valorDoCep = cep.value;
    console.log(valorDoCep)

    // Buscando o CEP no site ViaCEP:
    fetch(`https://viacep.com.br/ws/${valorDoCep}/json/`)

        // Transformando a resposta em JSON:
        .then(response => response.json())

        // Exibindo os dados no console:
        .then(data => {
            console.log(data)

            // Adicionando o CEP na lista:
            listaDeCep.push(data)
            console.log(listaDeCep)

            // adicionando as linhas na tabela:
            var novalinha = tbody.insertRow(0);

            // adicionando as celulas na tabela:
            var celulaCep = novalinha.insertCell(0);
            var celulaRua = novalinha.insertCell(1);
            var celulaBairro = novalinha.insertCell(2);
            var celulaCidade = novalinha.insertCell(3);
            var celulaUf = novalinha.insertCell(4);

            listaDeCep.forEach(item => {

                // adicionando os valores nas celulas e verificando se o dados existe:
                celulaCep.innerText = item.cep ? item.cep : '---';
                celulaRua.innerText = item.logradouro ? item.logradouro : '---';
                celulaBairro.innerText = item.bairro ? item.logradouro : '---';
                celulaCidade.innerText = item.localidade ? item.localidade : '---';
                celulaUf.innerText = item.uf ? item.uf : '---';

                // remove o ultimo item da tabela:
                if (tbody.rows.length > 4) {
                    tbody.deleteRow(4)
                }
            })

        

            // Exibindo os dados no HTML por ID:
            //var resultado = document.getElementById('resultado');
            // Exibibe o resultado no HTML:
            //resultado.innerText = `CEP: ${data.cep}, ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        })

    console.log(valorDoCep);
}

// Cria uma regra para não permitir que o campo cep seja preenchido com letras:
function mascaraCep(event) {
    // Define o tamanho maximo do campo:
    event.currentTarget.maxLength = 9;

    // Lendo o valor do CEP:
    let value = event.currentTarget.value;

    // Formata o campo de cep:
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');

    // Atualiza o campo de cep:
    event.currentTarget.value = value;

    // Retorna o evento:
    return event
}

// Adicionando um evento de keyup para o campo cep:
cep.addEventListener('keyup', mascaraCep);
// Adicionando um evento de submit no formulário:
formulario.addEventListener('submit', buscarCep);
