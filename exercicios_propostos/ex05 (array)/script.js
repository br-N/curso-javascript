let numeros = []
let num = document.getElementById('num')
let tab = document.getElementById('tab')
let res = document.getElementById('res')

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100)
        return true
    else
        return false
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1)
        return true
    else
        return false
} 

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, numeros)){
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        
        item.text = `Valor ${num.value} adicionado`
        item.value = `tab${numeros.length}`
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert("Valor inválido ou já se encontra na lista.")
    }
    num.value = ''
    num.focus()
}

function maiorValor(vet){
    let maior = vet[0]
    for(let i in numeros){
        if(vet[i] > maior)
            maior = vet[i]
    }
    return maior
}

function menorValor(vet){
    let menor = vet[0]
    for(let i=0; i<vet.length; i++){
        if(vet[i] < menor)
            menor = vet[i]
    }
    return menor
}

function soma(vet){
    let soma = 0
    for(let i=0; i<vet.length; i++){
        soma += vet[i]
    }
    return soma
}

function finalizar(){
    if(numeros.length==0){
        window.alert("Não há nenhum número para verificar.")
    }else{
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorValor(numeros)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorValor(numeros)}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma(numeros)}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma(numeros)/numeros.length}.</p>`
    }
}