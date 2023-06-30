const form = document.getElementById('form')
var linhas = ''
const nomes = []
const numeros = []



function addlinhas(){
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
    const nome = document.getElementById('nome')
    const numero = document.getElementById('numero')

    nomes.push(nome.value)
    numeros.push(parseInt(numero.value))

    let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td>${numero.value}</td>`
    linha += '</tr>'
    linhas += linha
    nome = ''
    numero = ''
}
form.addEventListener('submit', function(e){
    e.preventDefault()
    addlinhas()
})