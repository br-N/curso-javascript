function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')

     if(num.value.length!=0){
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
     }else{
         window.alert('[ERRO] Digite um número.')
     }
}