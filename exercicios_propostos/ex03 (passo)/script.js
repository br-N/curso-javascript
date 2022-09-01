function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.querySelector('div#res')

    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0 || passo.value<=0){
        window.alert('[ERRO] Verifique os dados novamente.')
    }else{
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        res.innerHTML = ''
        if(i<=f)
            for(var x=i; x<=f; x+=p)
                res.innerHTML += ` ${x} 👉🏼`
        else
            for(var x=i; x>=f; x-=p)
                res.innerHTML += ` ${x} 👉🏼`
        res.innerHTML += '😎👌🏼'
    }
}