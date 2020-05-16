let html = ''
let extrato = document.getElementById('extrato_div')
montaExtrato()

async function montaExtrato() {     
    await limpaHTML()
    await ordenaDados()
    await montaHTML()
    console.log(html)
}

async function limpaHTML(){
    html = ''
    extrato.removeChild(document.getElementById('extrato_box'))
}

async function ordenaDados(){
    dados.sort(function(a, b){
        if (a.index > b.index){
            return 1
        } 
        if (a.index < b.index){
            return -1
        }
        return 0
    })
}

async function montaHTML(){
    html = `<div id="extrato_box">
            <img src="./img/estrutura/header.jpg" height="auto" width="1280px">\n`
    dados.forEach(box => {
        html = html + `<img src="${box.img}" height="auto" width="1280px">\n`
    })
    html = html + `</div>`
    extrato.innerHTML = html
}