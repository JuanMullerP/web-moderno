
function criaPassaro(){
    const passaro = document.createElement('img')
    passaro.src = 'imgs/passaro.png'
    passaro.style.position = 'relative'
    passaro.style.width = '50px'
    passaro.style.height = '36px'
    passaro.setAttribute('move-passaro','')
    
    return passaro
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function criaCano(i){
    const canoCompleto=document.createElement('div')
    const tampa=document.createElement('div')
    const cano=document.createElement('div')

    canoCompleto.classList.add(`cano-completo${i}`)
    cano.classList.add(`cano${i}`)
    tampa.classList.add(`tampa${i}`)
    canoCompleto.appendChild(cano)
    canoCompleto.appendChild(tampa)
    return canoCompleto

}
function criaCanoInvertido(i){
    const canoCompleto=document.createElement('div')
    const cano=document.createElement('div')
    const tampa=document.createElement('div')

    canoCompleto.classList.add(`cano-completo-inv${i}`)
    cano.classList.add(`cano-inv${i}`)
    tampa.classList.add(`tampa-inv${i}`)

    canoCompleto.appendChild(tampa)
    canoCompleto.appendChild(cano)
    return canoCompleto

}
function criaObstaculos(){
    const arrayObstaculos=[]
    for(let i=0;i<3;i++){
        const obstaculo = document.createElement('div')
        const cano=criaCano(i)
        const canoInv=criaCanoInvertido(i)

        obstaculo.setAttribute(`move-obstaculo${i}`,'')
        obstaculo.classList.add(`obstaculo`)
        obstaculo.appendChild(cano)
        obstaculo.appendChild(canoInv)

        arrayObstaculos.push(obstaculo)       
    }
    return arrayObstaculos
}

function preparaJogo(){
    const div = document.querySelector('[wm-flappy')
    const passaro = criaPassaro()
    passaro.style.top = `${(div.clientHeight/2)-(passaro.height/2)}px`
    passaro.style.left = `${(div.clientWidth/2)-(passaro.width/2)}px`
    div.appendChild(passaro)
    const obstaculos=criaObstaculos()
    for(let obstaculo of obstaculos){
        div.appendChild(obstaculo)
    
    }
    document.querySelector(`.obstaculo:has(.cano-completo0)`).setAttribute('move-obstaculo0','true')
    document.querySelector(`.obstaculo:has(.cano-completo0)`).style.left='101.8%'
    document.querySelector(`.obstaculo:has(.cano-completo1)`).style.left='101.8%'
    document.querySelector(`.obstaculo:has(.cano-completo2)`).style.left='101.8%'
    return div
}
function movePassaro(passaro,movimento){
    let y=passaro.style.top.slice(0,-2)
    let tamanho=passaro.style.height.slice(0,-2)
    tamanho=eval(tamanho)
    y=eval(y)
    if(y<600-tamanho && y>0){
        passaro.style.top=`${y+movimento}px`
        return 0
    }else{
        return 1
    }
}
function moveObstaculo(obstaculo,ordem,anterior){
    let x =obstaculo.style.left.slice(0,-1)
    let posicaoDoAnterior= document.querySelector(`[move-obstaculo${anterior}]`).style.left.slice(0,-1)
    posicaoDoAnterior=eval(posicaoDoAnterior)
    console.log(obstaculo.style.left)
    x=eval(x)
    if(posicaoDoAnterior<=60){
       obstaculo.setAttribute(`move-obstaculo${ordem}`,'true')
    }
    if(obstaculo.getAttribute(`move-obstaculo${ordem}`)){
        obstaculo.style.left=`${x-1}%`
    }
    if(x<(-12)){
        obstaculo.style.left='100.08%'
    }
    /* else{
        obstaculo.style.left=
    } */

}
function moveObstaculos(obstaculos){
    for(let i=0;i<3;i++){
        moveObstaculo(obstaculos[i],i,(i==0)?2:i-1)
    }
    return 0
}
async function rodaJogo(){
    const passaro=document.querySelector('[move-passaro]')
    const cair=2
    const subir=5
    const obstaculo1=document.querySelector('[move-obstaculo0]')
    const obstaculo2=document.querySelector('[move-obstaculo1]')
    const obstaculo3=document.querySelector('[move-obstaculo2]')
    
    while(true){
        await sleep(30);
        moveObstaculos([obstaculo1,obstaculo2,obstaculo3])
        if(movePassaro(passaro,cair)){
            console.log('entrei')
            break
        }

    }
}


const jogo=preparaJogo()
jogo.onclick=rodaJogo